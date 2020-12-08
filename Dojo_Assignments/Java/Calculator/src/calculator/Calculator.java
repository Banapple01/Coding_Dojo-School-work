package calculator;

public class Calculator implements java.io.Serializable{
	private double operandOne = 0;
	private double operandTwo = 0;
	private String operation;
	private double results;
	
	public Calculator() {
		
	}
	
	public void performOperation() {
		double result = 0;
		if (String.valueOf(operation) == "+") {
			result = operandOne + operandTwo;
		}
		if (String.valueOf(operation) == "-") {
			result = operandOne - operandTwo;
		}
		this.setResults(result);
	}

	public double getOperandOne() {
		return operandOne;
	}

	public void setOperandOne(double operandOne) {
		this.operandOne = operandOne;
	}

	public double getOperandTwo() {
		return operandTwo;
	}

	public void setOperandTwo(double operandTwo) {
		this.operandTwo = operandTwo;
	}

	public String getOperation() {
		return operation;
	}

	public void setOperation(String operation) {
		this.operation = operation;
	}

	public double getResults() {
		System.out.println("The result is " + results);
		return results;
	}



	public void setResults(double results) {
		this.results = results;
	}
	
	
}
