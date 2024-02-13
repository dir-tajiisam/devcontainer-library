#!/bin/bash

# This script is run after the container is started.
USER=$(whoami)

# python
sudo pip install poetry
poetry config virtualenvs.in-project true
poetry install --no-root
