import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: -1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

//  should add an expense
test('should add an expense', () => {
    const newExpense = {
        id: '100',
        description: 'Jumbo',
        note: 'this is delicious',
        amount: 455,
        createdAt: 123456
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    };
    const state = expensesReducer( expenses, action );
    expect(state).toEqual([...expenses, newExpense ]);
});

// editing - should edit an expense
test('should edit an expense', () => {
    const update = {
        note: 'Paid in full'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: update
    };
    const state = expensesReducer( expenses, action);
    expect(state).toEqual([ expenses[0], expenses[1], {...expenses[2], ...update}]);
});

// editing - should not edit expense if expense not found
test('should not edit an expense if expense not found', () => {
    const update = {
        note: 'This should not happen'
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '5',
        updates: update
    };
    const state = expensesReducer( expenses, action);
    expect(state).toEqual(expenses);
    
});
