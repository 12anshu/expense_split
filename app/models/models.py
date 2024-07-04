from pydantic import BaseModel

class ExpenseModel(BaseModel):
    id: int
    description: str
    amount: float
    number_of_people: int
    split_amount: float
