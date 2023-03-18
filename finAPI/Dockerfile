FROM python:3.8.15

COPY ./ /app/

WORKDIR /app

RUN apt-get update && apt-get install -y net-tools

RUN kill -9 $(lsof -t -i:443) || echo "No process found on port 443"

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 443

CMD ["uvicorn", "stockapi.main:app", "--host", "0.0.0.0", "--port", "443"]
