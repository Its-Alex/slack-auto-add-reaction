.PHONY: docker-build
docker-build:
	docker build . -t itsalex/slack-auto-add-reaction:$$(git rev-parse --abbrev-ref HEAD)

.PHONY: docker-push
docker-push:
	docker tag itsalex/slack-auto-add-reaction:$$(git rev-parse --abbrev-ref HEAD) itsalex/slack-auto-add-reaction:latest
	docker push itsalex/slack-auto-add-reaction:latest