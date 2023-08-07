FROM openjdk:8-alpine
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories && apk add --update ttf-dejavu fontconfig && rm -rf /var/cache/apk/*
COPY Fonts/ /usr/share/fonts/win/
RUN mkfontscale && mkfontdir && fc-cache
ENV TZ=Asia/Shanghai
ENV LANG C.UTF-8
ENV NLS_LANG "SIMPLIFIED CHINESE"
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

