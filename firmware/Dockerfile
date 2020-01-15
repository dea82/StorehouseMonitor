FROM alpine

# Install mos tool dependencies
RUN apk add --no-cache curl

# Install mos tool
ADD https://mongoose-os.com/downloads/mos/install.sh /tmp/install-mos.sh
RUN sh /tmp/install-mos.sh

# Add source files
ADD mos.yml /sources/mos.yml
ADD src /sources/src

WORKDIR /sources/

# Build
RUN /root/.mos/bin/mos build --verbose --platform esp8266

# Set entrypoint
ENTRYPOINT ["/root/.mos/bin/mos"]
