package ukahootapi;

import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class PollJSON {
	private String poll_id;
	private String poll_name;
	private List<Question> questions;
	public String getPoll_id() {
		return poll_id;
	}
	public void setPoll_id(String poll_id) {
		this.poll_id = poll_id;
	}
	public String getPoll_name() {
		return poll_name;
	}
	public void setPoll_name(String poll_name) {
		this.poll_name = poll_name;
	}
	public List<Question> getQuestions() {
		return questions;
	}
	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}
	
	
}
