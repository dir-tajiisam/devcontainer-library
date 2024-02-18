#!/bin/bash

# This script is run after the container is started.
USER=$(whoami)

# go mod tidy で依存関係を整理
go mod tidy
