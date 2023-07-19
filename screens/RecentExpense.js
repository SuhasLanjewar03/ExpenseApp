import {Text} from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import React, {useContext} from "react";
import {ExpensesContext} from "../store/expenses-context";
import {getDateMinusDays} from "../Util/date";

function RecentExpense() {
    const expensesCtx = useContext(ExpensesContext);
    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);
        return (expense.date >= date7DaysAgo && expense.date <= today);
    });

    return (
        <ExpensesOutput expenses={recentExpenses}
                        expensesPeriod="Last 7 Days"
                        fallBackText="No expenses registered for last 7 days"/>
    );
}

export default RecentExpense;