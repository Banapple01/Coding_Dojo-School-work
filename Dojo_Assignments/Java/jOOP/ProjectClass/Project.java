public class Project {
    private String name;
	private String description;
	
	public Project() {
	}
	
	public Project(String nameParam) {
		this.name = nameParam;
	}
	
	public Project(String nameParam, String descriptionParam) {
		this.name = nameParam;
		this.description = descriptionParam;
	}
	
	public String elevatorPitch() {
		return this.name + ": " + this.description;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String nameParam) {
		this.name = nameParam;
	}
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String descriptionParam) {
		this.description = descriptionParam;
	}
}
