#!/bin/bash

# This script is run after the container is started.
USER=$(whoami)

. ~/.nvm/nvm.sh
npm ci