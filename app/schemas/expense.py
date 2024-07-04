from pydantic import BaseModel

class ExpenseCreate(BaseModel):
    description: str
    amount: float
    number_of_people: int
    
class ExpenseResponse(BaseModel):
    id: int
    description: str
    amount: float
    number_of_people: int
    split_amount: float
