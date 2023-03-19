FROM python:3.8.15


# Copy your application code to the container
COPY ./ /app/

WORKDIR /app

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Download the certificate files
RUN mkdir -p /etc/ssl/certs/ /etc/ssl/private/
# ...

RUN curl -sS https://gist.githubusercontent.com/madhavms/23eef898ed392b0bdd91ecf9c0ea2d41/raw/7b4774a0dbc363159a7f4d9de5846522172221c4/ca_bundle.crt -o /tmp/ca-certificates.crt \
  && curl -sS https://gist.githubusercontent.com/madhavms/a53598a9587ceed632b74239c754ff9a/raw/aafc3155ce6e5988403411827b051d81d3f6569e/certificate.crt -o /tmp/certificate.crt \
  && curl -sS https://gist.githubusercontent.com/madhavms/060faf1ccf60cadc1b5e446bd96514f9/raw/7c0de301d03af6c933c9863701788d5162c41e61/private.key -o /tmp/private.key \
  && cat /tmp/ca-certificates.crt > /etc/ssl/certs/ca-certificates.crt \
  && cat /tmp/certificate.crt > /etc/ssl/certs/certificate.crt \
  && cat /tmp/private.key > /etc/ssl/private/private.key \
  && rm /tmp/ca-certificates.crt /tmp/certificate.crt /tmp/private.key
# ...


EXPOSE 443

CMD ["uvicorn", "stockapi.main:app", "--host", "0.0.0.0", "--port", "443", "--ssl-keyfile", "/etc/ssl/private/private.key", "--ssl-certfile", "/etc/ssl/certs/certificate.crt", "--ssl-ca-certfile", "/etc/ssl/certs/ca-certificates.crt", "--workers", "4", "--proxy-headers"]