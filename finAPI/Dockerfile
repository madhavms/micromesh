FROM python:3.8.15

# Pass the build arguments as environment variables
ARG CA_BUNDLE_CRT_URL
ARG CERTIFICATE_CRT_URL
ARG PRIVATE_KEY_URL

# Copy your application code to the container
COPY ./ /app/

WORKDIR /app

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Download the certificate files
RUN mkdir -p /etc/ssl/certs/ /etc/ssl/private/
# ...
RUN echo "CA_BUNDLE_CRT_URL=$CA_BUNDLE_CRT_URL"
RUN echo "CERTIFICATE_CRT_URL=$CERTIFICATE_CRT_URL"
RUN echo "PRIVATE_KEY_URL=$PRIVATE_KEY_URL"
RUN curl -sS $CA_BUNDLE_CRT_URL -o /tmp/ca-certificates.crt \
  && curl -sS $CERTIFICATE_CRT_URL -o /tmp/certificate.crt \
  && curl -sS $PRIVATE_KEY_URL -o /tmp/private.key \
  && cat /tmp/ca-certificates.crt > /etc/ssl/certs/ca-certificates.crt \
  && cat /tmp/certificate.crt > /etc/ssl/certs/certificate.crt \
  && cat /tmp/private.key > /etc/ssl/private/private.key \
  && rm /tmp/ca-certificates.crt /tmp/certificate.crt /tmp/private.key
# ...


EXPOSE 443

CMD ["uvicorn", "stockapi.main:app", "--host", "0.0.0.0", "--port", "443", "--ssl-keyfile", "/etc/ssl/private/private.key", "--ssl-certfile", "/etc/ssl/certs/certificate.crt", "--ssl-ca-certfile", "/etc/ssl/certs/ca-certificates.crt", "--workers", "4", "--proxy-headers"]