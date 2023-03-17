FROM python:3.8.15

COPY ./ /app/

WORKDIR /app

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8000

CMD ["uvicorn", "stockapi.main:app", "--host", "0.0.0.0", "--port", "8000"]
