FROM python:3.12

ENV CATO_CERTIFICATION_PATH=/usr/share/ca-certificates/CatoNetworksTrustedRootCA.pem
ENV USER=dirbato

# For Ubuntu
RUN apt-get update -y && apt-get upgrade -y && \
    apt-get install -y curl sudo less && \
    curl -sL https://myvpn.catonetworks.com/public/certificates/CatoNetworksTrustedRootCA.pem -o ${CATO_CERTIFICATION_PATH} && \
    echo "CatoNetworksTrustedRootCA.pem" | sudo tee -a /etc/ca-certificates.conf && \
    update-ca-certificates && \
    apt-get install -y vim unzip jq tar gzip git software-properties-common

# User
RUN addgroup --system ${USER} && \
    adduser --system --ingroup ${USER} --shell /bin/bash --home /home/${USER} ${USER} && \
    cp ~/.bashrc /home/${USER}/.bashrc && \
    chown -R ${USER}:${USER} /home/${USER} && \
    echo "${USER} ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers && \
    echo 'Defaults env_keep +="PATH"' >> /etc/sudoers && \
    sed -i '/secure_path/d' /etc/sudoers

# starship
RUN curl -fsSL https://starship.rs/install.sh | sh -s -- -y && \
    echo 'eval "$(starship init bash)"' >> /home/${USER}/.bashrc

USER ${USER}