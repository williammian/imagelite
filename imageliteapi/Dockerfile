FROM amazoncorretto:17
COPY target/*.jar ./application.jar
EXPOSE 8080

ENV POSTGRES_HOST=localhost:5433
RUN echo "the env var POSTGRES_HOST value is $POSTGRES_HOST"

ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=production", "application.jar"]