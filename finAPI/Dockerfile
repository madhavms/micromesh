FROM python:3.8.15

COPY ./ /app/

WORKDIR /app

RUN apt-get update && apt-get install -y net-tools

RUN kill -9 $(lsof -t -i:80) || echo "No process found on port 80"

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 80

CMD ["uvicorn", "stockapi.main:app", "--host", "0.0.0.0", "--port", "80"]
