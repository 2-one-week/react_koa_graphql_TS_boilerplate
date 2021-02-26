# run koa server dev
.PHONY: server-dev
server-dev:
	cd server && \
		NODE_ENV=development \
		SERVER_PORT=3000 \
		DB_HOST=mongodb://oneweek:oneweek1128@175.192.142.248:27017 \
		DB_NAME=temp \
	npm run start:dev

# run koa server production
.PHONY: server-prod
server-prod:
	cd server && \
		NODE_ENV=production \
		SERVER_PORT=3000 \
		DB_HOST=mongodb://oneweek:oneweek1128@175.192.142.248:27017 \
		DB_NAME=temp \
	npm run start:dev

# run react client webpack dev server
.PHONY: client-dev
client-dev:
	cd client && \
		NODE_ENV=development \
		CLIENT_PORT=8000 \
	npm run start:dev

.PHONY: client-prod
client-prod:
	cd client && \
		NODE_ENV=production \
	npm run build:prod