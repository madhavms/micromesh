FROM python:3.8.15

COPY ./finAPI/ /app/finAPI/

WORKDIR /app

RUN pip install --no-cache-dir -r finAPI/requirements.txt

CMD ["uvicorn", "finAPI.stockapi.main:app", "--host", "0.0.0.0", "--port", "8000"]

