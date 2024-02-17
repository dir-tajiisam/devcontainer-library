FROM node:20.9.0

ENV CATO_CERTIFICATION_PATH=/usr/share/ca-certificates/CatoNetworksTrustedRootCA.pem
ENV USER=dirbato
ENV TYPESYNC_VERSION=0.12.1
ENV TS_NODE_VERSION=10.9.2
ENV TYPESCRIPT_VERSION=5.2.2

# For Ubuntu
RUN apt-get update -y && apt-get upgrade -y && \
    apt-get install -y curl sudo less && \
    curl -sL https://myvpn.catonetworks.com/public/certificates/CatoNetworksTrustedRootCA.pem -o ${CATO_CERTIFICATION_PATH} && \
    echo "CatoNetworksTrustedRootCA.pem" | sudo tee -a /etc/ca-certificates.conf && \
    update-ca-certificates && \
    apt-get install -y vim unzip jq tar gzip git 

# User
RUN addgroup --system ${USER} && \
    adduser --system --ingroup ${USER} --shell /bin/bash --home /home/${USER} ${USER} && \
    cp ~/.bashrc /home/${USER}/.bashrc && \
    chown -R ${USER}:${USER} /home/${USER} && \
    echo "${USER} ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers && \
    echo 'Defaults env_keep +="PATH"' >> /etc/sudoers && \
    sed -i '/secure_path/d' /etc/sudoers

# typescript
RUN npm install --location=global \
#   ts-lint@$TS_LINT_VERSION \
  ts-node@$TS_NODE_VERSION \
  typescript@$TYPESCRIPT_VERSION \
  typesync@$TYPESYNC_VERSION

# starship
RUN curl -fsSL https://starship.rs/install.sh | sh -s -- -y && \
    echo 'eval "$(starship init bash)"' >> /home/${USER}/.bashrc

USER ${USER}
