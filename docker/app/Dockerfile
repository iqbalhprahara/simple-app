###################
# DEVELOPMENT BUILD
###################
FROM node:20-alpine As development

# Let scripts know we're running in Docker (useful for containerised development)
ENV RUNNING_IN_DOCKER true

LABEL maintainer='Iqbal Hikmat Prahara <https://github.com/iqbalhprahara>'

RUN apk --update add git zsh curl

RUN mkdir -p /home/node/.antigen
RUN curl -L git.io/antigen > /home/node/.antigen/antigen.zsh
# Use my starter Docker ZSH config file for this, or your own ZSH configuration file (https://gist.github.com/arctic-hen7/bbfcc3021f7592d2013ee70470fee60b)
COPY .zshrc /home/node/.zshrc
RUN chown -R node:node /home/node/.antigen /home/node/.zshrc
RUN sed -i -e "s/bin\/ash/bin\/zsh/" /etc/passwd

# Create app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY --chown=node:node package*.json ./

# Install app dependencies using the `npm ci` command instead of `npm install`
# RUN npm i

# Bundle app source
COPY --chown=node:node . .

USER node

RUN /bin/zsh /home/node/.zshrc