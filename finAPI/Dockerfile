FROM python:3.8.15

# Install Apache and mod_proxy_uwsgi
RUN apt-get update && \
    apt-get install -y apache2 libapache2-mod-proxy-uwsgi

# Copy your application code to the container
COPY ./ /app/

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Configure Apache
COPY ./apache.conf /etc/apache2/sites-available/000-default.conf

# Expose Apache ports
EXPOSE 80
EXPOSE 443

# Start Apache and Uvicorn using supervisord
RUN apt-get install -y supervisor
COPY ./supervisord.conf /etc/supervisor/conf.d/supervisord.conf
CMD ["/usr/bin/supervisord"]
