FROM mcr.microsoft.com/devcontainers/base:ubuntu

ENV DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Tokyo
RUN echo $TZ > /etc/timezone

ARG WORKDIR=/project
WORKDIR ${WORKDIR}

# devcontainers/base image already has a non-root user vscode
ARG USERNAME=vscode

# change default shell
SHELL ["/bin/bash", "-o", "pipefail", "-c"]
RUN chsh -s /bin/bash

# Increase timeout for apt-get to 300 seconds
# hadolint ignore=DL3059
RUN /bin/echo -e "\n\
    Acquire::http::Timeout \"300\";\n\
    Acquire::ftp::Timeout \"300\";" >> /etc/apt/apt.conf.d/99timeout

# terminal setting
RUN wget --progress=dot:giga https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash -O /home/${USERNAME}/.git-completion.bash \
    && wget --progress=dot:giga https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh -O /home/${USERNAME}/.git-prompt.sh \
    && chmod a+x /home/${USERNAME}/.git-completion.bash \
    && chmod a+x /home/${USERNAME}/.git-prompt.sh \
    && echo -e "\n\
    export VIRTUAL_ENV_DISABLE_PROMPT=1\n\
    source ~/.git-completion.bash\n\
    source ~/.git-prompt.sh\n\
    export PS1='\\[\\e[30m\\]\\\\t\\[\\e[0m\\] \\[\\e]0;\\u@\\h: \\w\\a\\]\${debian_chroot:+(\$debian_chroot)}\\[\\033[01;32m\\]\\u\\[\\033[00m\\]:\\[\\033[01;34m\\]\\w\\[\\033[00m\\]\\[\\033[1;30m\\]\$(__git_ps1)\\[\\033[0m\\] \\$ '\n\
    " >>  /home/${USERNAME}/.bashrc

# Configure apt and install packages
RUN rm -rf /var/lib/apt/lists/* \
    && apt-get update \
    && apt-get upgrade -y \
    && apt-get -y --no-install-recommends install sudo vim tzdata less jq \
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

# install hadolint
RUN wget --progress=dot:giga https://github.com/hadolint/hadolint/releases/latest/download/hadolint-Linux-x86_64 -O /usr/local/bin/hadolint \
    && chmod +x /usr/local/bin/hadolint

# ----------- Base setup complete -----------

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install --no-install-recommends -y nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \

USER $USERNAME

ENV DEBIAN_FRONTEND=
CMD ["/bin/bash"]
