/*
 * Copyright (c) 2014-2018 Cesanta Software Limited
 * All rights reserved
 *
 * Licensed under the Apache License, Version 2.0 (the ""License"");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an ""AS IS"" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include "mgos.h"
#include "mgos_dht.h"
#include "mgos_gcp.h"
#include "mgos_wifi.h"

static const unsigned int MS_PER_SECOND = 1000;

static void timer_cb(void *dht) {
  if (mgos_gcp_is_connected()) {
    float temperature = mgos_dht_get_temp(dht);
    float humidity = mgos_dht_get_humidity(dht);
    if (mgos_gcp_send_eventf("{temperature: %f, humidity: %f}", temperature, humidity)) {
      LOG(LL_INFO, ("Successfully sent telemetry: Temperature %.1fC, Humidity %.1f%%", temperature, humidity));
    } else {
      LOG(LL_INFO, ("Failed sending telementry!"));
    }
  } else {
    LOG(LL_INFO, ("Failed to connected to GCP!"));
  }
}

enum mgos_app_init_result mgos_app_init(void) {
  struct mgos_dht *dht = mgos_dht_create(mgos_sys_config_get_app_pin(), DHT11);
  const int sampling_time_ms = mgos_sys_config_get_app_sampling_time() * MS_PER_SECOND;
  mgos_set_timer(sampling_time_ms /* ms */, MGOS_TIMER_REPEAT, timer_cb, dht);
  return MGOS_APP_INIT_SUCCESS;
}
