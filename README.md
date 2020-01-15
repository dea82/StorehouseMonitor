# Storehouse Monitor

TBD

## Getting Started

TBD

## Firmware

### Prerequisite

Install [Mongoose OS](https://mongoose-os.com/mos.html)

For Mac

```bash
brew tap cesanta/mos
brew install mos
```

### Build firmware

```bash
mos build --local --verbose --platform esp8266
```

### Flash firmware

```bash
mos flash
```

### Configure firmware

Set WiFi

```bash
mos wifi SSID PASSWORD
```

Connect device to Google Cloud Platform IoT Core

```bash
mos gcp-iot-setup --gcp-project PROJECT --gcp-region REGION --gcp-registry REGISTRY
```

## Contributing

TBD

## Versioning

TBD

## Authors

TBD

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

TBD
