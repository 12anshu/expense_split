from fastapi import APIRouter, HTTPException
from app.services.expense_service import ExpenseService
from app.schemas.expense import ExpenseCreate, ExpenseResponse
from typing import List

router = APIRouter()

# add_expense_router = router.add_api_route("/expense/", ExpenseUseCase().add_expense, response_model=ExpenseResponseModel)
# add_expense_router = APIRouter(prefix="/expense", )

@router.post("/expenses/", response_model=ExpenseResponse)
async def create_expense(expense: ExpenseCreate):
    return ExpenseService().add_expense(expense=expense)

@router.get("/expenses/", response_model=List[ExpenseResponse])
async def get_expense():
    return ExpenseService().get_expense()
