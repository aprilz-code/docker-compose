# 制作skywalking--mysql（默认其中没有mysql驱动）

```shell
# 构建镜像 注：有点慢
docker build -t  registry.cn-shenzhen.aliyuncs.com/whiteblog/skywalking-oap-server-mysql:9.2.0 .
# 推送镜像
docker push  registry.cn-shenzhen.aliyuncs.com/whiteblog/skywalking-oap-server-mysql:9.2.0


