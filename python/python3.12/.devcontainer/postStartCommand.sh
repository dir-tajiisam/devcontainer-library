#!/bin/bash

# This script is run after the container is started.
USER=$(whoami)

# python
sudo pip install poetry
poetry config virtualenvs.in-project true
poetry install --no-root
# for requests
grep `head -n2 /usr/share/ca-certificates/CatoNetworksTrustedRootCA.pem | tail -n1` $(python -c "import certifi;print(certifi.where())")
if [ $? -ne 0 ]; then
    sudo sh -c 'cat /usr/share/ca-certificates/CatoNetworksTrustedRootCA.pem >> '$(python -c "import certifi;print(certifi.where())")
fi