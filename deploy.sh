#!/bin/sh

# 1. Préparer le dossier SSH interne
mkdir -p /root/.ssh

# 2. Copier les clés depuis le volume Windows vers le Linux interne
cp -r /tmp/.ssh-windows/* /root/.ssh/

# 3. Corriger les permissions (ce que Windows ne nous laissait pas faire)
chmod 700 /root/.ssh
chmod 600 /root/.ssh/*

# 4. Ajouter GitHub aux serveurs connus (pour éviter la question yes/no)
ssh-keyscan github.com >> /root/.ssh/known_hosts

# 5. Configurer une identité Git fictive (obligatoire pour gh-pages)
git config --global user.email "deploy@docker.container"
git config --global user.name "Docker Deploy"

# 6. Lancer le vrai déploiement
echo "🚀 Lancement du déploiement..."
npm run deploy