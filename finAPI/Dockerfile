FROM python:3.8.15

# Copy your application code to the container
COPY ./ /app/

WORKDIR /app

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Install ca-certificates and update
RUN apt-get update && apt-get install -y ca-certificates && update-ca-certificates

# Download SSL certificates
RUN curl -sS {{ secrets.CA_BUNDLE_CRT }} -o /etc/ssl/certs/ca-certificates.crt \
 && curl -sS {{ secrets.CERTIFICATE_CRT }} -o /etc/ssl/certs/certificate.crt \
 && curl -sS {{ secrets.PRIVATE_KEY }} -o /etc/ssl/private/private.key

EXPOSE 443

CMD ["uvicorn", "stockapi.main:app", "--host", "0.0.0.0", "--port", "443", "--ssl-keyfile", "/etc/ssl/private/private.key", "--ssl-certfile", "/etc/ssl/certs/certificate.crt", "--ssl-ca-file", "/etc/ssl/certs/ca-certificates.crt", "--workers", "4", "--proxy-headers"]