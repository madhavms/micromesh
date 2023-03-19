FROM python:3.8.15

# Copy your application code to the container
COPY ./ /app/

WORKDIR /app

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt


EXPOSE 80

CMD ["uvicorn", "stockapi.main:app", "--host", "0.0.0.0", "--port", "80"]

