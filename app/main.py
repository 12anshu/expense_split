from fastapi import FastAPI, HTTPException
import uvicorn
from app.routers.expenses import router
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
app = FastAPI()

app.include_router(router)

app.mount("/static", StaticFiles(directory="app/static"), name="static")

@app.get("/")
async def get_ping():
    return FileResponse("app/static/index.html")

if __name__ == "__main__":
    uvicorn.run(app="main:app", host="127.0.0.1", port=8000, reload=True)
