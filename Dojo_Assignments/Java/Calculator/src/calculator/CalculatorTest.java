package calculator;

public class CalculatorTest {

	public static void main(String[] args) {
		Calculator stuff = new Calculator();
		stuff.setOperandOne(3);
		stuff.setOperation("+");
		stuff.setOperandTwo(5);
		stuff.performOperation();
		stuff.getResults();
	}

}
