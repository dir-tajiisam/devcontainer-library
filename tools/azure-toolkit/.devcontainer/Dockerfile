FROM amd64/ubuntu:22.04
# FROM ubuntu:22.04

ENV TERRAFORM_VERSION=1.5.0
ENV TERRAFORM_DOCS_VERSION=0.16.0
ENV TFLINT_VERSION=0.47.0
ENV NVM_VERSION=0.39.0
ENV NODE_VERSION=18
ENV AZURE_DEV_CLI=1.6.1
ENV AZURE_CLI=2.51.0
ENV AZURE_CLI_PYTHON_VERSION=3.10
ENV CATO_CERTIFICATION_PATH=/usr/share/ca-certificates/CatoNetworksTrustedRootCA.pem
ENV USER=dirbato

## For Ubuntu
RUN apt-get update -y && apt-get upgrade -y && \
    apt-get install -y curl sudo && \
    curl -sL https://myvpn.catonetworks.com/public/certificates/CatoNetworksTrustedRootCA.pem -o ${CATO_CERTIFICATION_PATH} && \
    echo "CatoNetworksTrustedRootCA.pem" | sudo tee -a /etc/ca-certificates.conf && \
    update-ca-certificates && \
    apt-get install -y vim unzip jq tar gzip git software-properties-common

# terraform
RUN curl -OL https://releases.hashicorp.com/terraform/${TERRAFORM_VERSION}/terraform_${TERRAFORM_VERSION}_linux_amd64.zip && \
    unzip terraform_${TERRAFORM_VERSION}_linux_amd64.zip -d /bin/
# terraform-docs
RUN curl -sSLo ./terraform-docs.tar.gz https://github.com/terraform-docs/terraform-docs/releases/download/v${TERRAFORM_DOCS_VERSION}/terraform-docs-v${TERRAFORM_DOCS_VERSION}-linux-amd64.tar.gz && \                                      
    tar -xzf terraform-docs.tar.gz && \
    mv terraform-docs /bin/terraform-docs && \
    chmod +x /bin/terraform-docs && \
    terraform-docs --version
# tflint
RUN curl --fail --silent -L -o /tmp/tflint.zip "https://github.com/terraform-linters/tflint/releases/download/v${TFLINT_VERSION}/tflint_linux_amd64.zip" \
    && unzip /tmp/tflint.zip -d /tmp/ \
    && install -c -v /tmp/tflint /usr/local/bin/ \
    && rm /tmp/tflint*

# azure-dev-cli
RUN if [ $(uname -i) = "aarch64" ]; then \
        mkdir -p /opt/microsoft/azd && \
        curl -L https://github.com/Azure/azure-dev/releases/download/azure-dev-cli_${AZURE_DEV_CLI}/azd-linux-arm64.tar.gz | tar zxvf - -C /opt/microsoft/azd && \
        chmod +x /opt/microsoft/azd/azd-linux-arm64 && \
        ln -s /opt/microsoft/azd/azd-linux-arm64 /usr/local/bin/azd; \
    else \
        curl -fSL https://github.com/Azure/azure-dev/releases/download/azure-dev-cli_${AZURE_DEV_CLI}/azd_${AZURE_DEV_CLI}_amd64.deb -o azd_${AZURE_DEV_CLI}_amd64.deb && \
        apt-get update -y && \
        apt install ./azd_${AZURE_DEV_CLI}_amd64.deb -y; \
    fi
# azure-cli
RUN mkdir -p /etc/apt/keyrings && \
    curl -sLS https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor | tee /etc/apt/keyrings/microsoft.gpg > /dev/null && \
    chmod go+r /etc/apt/keyrings/microsoft.gpg
RUN AZ_REPO=$(lsb_release -cs) && \
    echo "deb [arch=`dpkg --print-architecture` signed-by=/etc/apt/keyrings/microsoft.gpg] https://packages.microsoft.com/repos/azure-cli/ $AZ_REPO main" | \
    tee /etc/apt/sources.list.d/azure-cli.list
RUN apt-get update -y && apt-get install azure-cli=${AZURE_CLI}-1~jammy
# cato ※Azure CLIのPythonが何故か3.10になる問題。
RUN cat ${CATO_CERTIFICATION_PATH} >> /opt/az/lib/python${AZURE_CLI_PYTHON_VERSION}/site-packages/certifi/cacert.pem

# node
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v${NVM_VERSION}/install.sh | bash && \
    . ~/.nvm/nvm.sh && \
    nvm install ${NODE_VERSION} && \
    nvm use ${NODE_VERSION} && \
    node --version && \
    npm --version && \
    npm install -g npm@latest
# User
RUN addgroup --system ${USER} && \
    adduser --system --ingroup ${USER} --shell /bin/bash --home /home/${USER} ${USER} && \
    cp ~/.bashrc /home/${USER}/.bashrc && \
    cp -r ~/.nvm /home/${USER}/.nvm && \
    chown -R ${USER}:${USER} /home/${USER} && \
    echo "${USER} ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers && \
    echo 'Defaults env_keep +="PATH"' >> /etc/sudoers && \
    sed -i '/secure_path/d' /etc/sudoers

# starship
RUN curl -fsSL https://starship.rs/install.sh | sh -s -- -y && \
    echo 'eval "$(starship init bash)"' >> /home/${USER}/.bashrc

USER ${USER}