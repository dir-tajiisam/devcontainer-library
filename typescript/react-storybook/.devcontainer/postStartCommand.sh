#!/bin/bash

# This script is run after the container is started.
USER=$(whoami)

# .ssh
# cp -r /tmp/.ssh $HOME
# chown -R $USER:$USER $HOME/.ssh
# chmod 600 $HOME/.ssh/*

# node_modules
# mkdir -p node_modules && \
# sudo chown $USER node_modules && \
# npm ci

# npm.certs.pemがなかったら作る
if [ ! -e ~/.npm.certs.pem ]; then
  curl -o ~/.npm.certs.pem https://curl.se/ca/cacert.pem
  cat /usr/share/ca-certificates/CatoNetworksTrustedRootCA.pem >> ~/.npm.certs.pem
fi

