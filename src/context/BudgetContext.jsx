import { createContext, useState } from "react";

const BudgetContext = createContext(null);


function BudgetProvider({ children }) {

    const [budgetMode, setBudgetMode] = useState(true);

    return <BudgetContext.Provider value={budgetMode}>
        {children}
    </BudgetContext.Provider>

}


export {BudgetContext, BudgetProvider};