FROM python:3.8.15

# Copy your application code to the container
COPY ./ /app/

WORKDIR /app

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy SSL certificates to the container
COPY ./certs/ssl_keyfile.pem /etc/ssl/private/
COPY ./certs/ssl_certfile.pem /etc/ssl/certs/

EXPOSE 443

CMD ["uvicorn", "stockapi.main:app", "--host", "0.0.0.0", "--port", "443", "--ssl-keyfile", "/etc/ssl/private/ssl_keyfile.pem", "--ssl-certfile", "/etc/ssl/certs/ssl_certfile.pem"]
