#!/bin/bash

# This script is run after the container is started.
USER=$(whoami)

. ~/.nvm/nvm.sh

# # node_modules
# mkdir -p node_modules && \
# sudo chown $USER:$USER node_modules && \
npm ci

# # .terraform
# mkdir -p .terraform && \
# sudo chown $USER:$USER .terraform