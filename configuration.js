var config = {
	load_data: function() {
		data = localStorage.getItem("config_data");
		
		if (data != null) {
			try {
				config.data = JSON.parse(data);
			}
			catch (SyntaxError) {
				alert("Error: Wrong data structure!");
			}
		}
		
	},
	
	save_data: function(new_data) {
		localStorage.setItem("config_data", JSON.stringify(new_data));
	},
	
	reset_data: function() {
		localStorage.removeItem("config_data");
	},

	data: {
		language: "en",

		timetable: [
			{
				day: "Monday",
				schedule: [
					{subject: "Mathematics", teacher: "Prithwineel Paul"},
					{subject: "IT Workshop", teacher:"Soma Das"},
					{subject: "Analog Electronic Circuits", teacher: "Prof. Goutam Ghosh"},
					{subject: "BREAK ", teacher: " "},
					{subject: "Digital Circuits", teacher: "Monalisa Dey"},
					{subject: "Skill Development for Professionals ", teacher:"RJP"}, 
					{subject: "Skill Development for Professionals", teacher: "RJP"},
					{subject: "Mentoring", teacher:""}
				]
			},

			{
				day: "Tuesday",
				schedule: [
					{subject: "Technical Report Writing", teacher: "Bavrabi Ghosh"},
					{subject: "Mathematics", teacher: "Dr.Amit Kumar Das"},
					{subject: "Data Structures", teacher: "Anupam Mondal"},
					{subject: "BREAK", teacher: ""},
					{subject: "Analog Electronic Circuits", teacher: "Tufan Saha"},
					{subject: "Workshop Laboratory", teacher: "Soma Das ; Sainik Mahata"},
					{subject: "Workshop Laboratory",  teacher: "Soma Das ; Sainik Mahata"},
					{subject: "MOOCs 2", teacher: "Prithwineel Paul"}
				]
			},

			{
				day: "Wednesday",
				schedule: [
					{subject: "Data Structures", teacher: "Dr. Sumanta Chakraborty"},
					{subject: "Analog Laboratory", teacher: "Arpan Chakroborty ; Tufan Saha"},
					{subject: "Analog Laboratory", teacher: "Arpan Chakroborty ; Tufan Saha"},
					{subject: "BREAK", teacher: ""},
					{subject: "Mathematics", teacher: "Prithwineel Paul"},
					{subject: "Data Structures Laboratory", teacher: "Pinaki Karmakar"},
					{subject: "Data Structures Laboratory",  teacher: "Pinaki Karmakar"},
					{subject: "App Development", teacher: "Koushik Deb"}
				]
			},

			{
				day: "Thursday",
				schedule: [
					{subject: "Technical Report Writing", teacher: "Bavrabi Ghosh"},
					{subject: "Analog Electronics Circuit", teacher: "Shreejita Mukherjee"},
					{subject: "Digital Circuits", teacher: "Monalisa Dey"},
					{subject: "BREAK", teacher: ""},
					{subject: "Placement", teacher: ""},
					{subject: "Placement", teacher: ""},
					{subject: "MOOCs 1",  teacher: "Anupam Mondal"},
					{subject: "Mentoring", teacher: ""}
				]
			},

			{
				day: "Friday",
				schedule: [
					{subject: "Digital Circuits", teacher: "Bavrabi Ghosh"},
					{subject: "Mathematics", teacher: "Dr.Amit Kumar Das"},
					{subject: "Data Structures", teacher: "Anupam Mondal"},
					{subject: "BREAK", teacher: ""},
					{subject: "Data Structures", teacher: "Nilanjana Dutta Roy"},
					{subject: "Digital Laboratory", teacher: "Arpan Chakroborty"},
					{subject: "Digital Laboratory",  teacher: "Arpan Chakroborty"},
					{subject: "Mentoring", teacher: ""}
				]
			}
		],
	
	
	
		periods: [
			{start: "9:30", end: "10:20"},
			{start: "10:30", end: "11:20"},
			{start: "11:30", end: "12:20"},
			{start: "12:20", end: "13:10"},
			{start: "13:10", end: "14:00"},
			{start: "14:10", end: "15:00"},
			{start: "15:10", end: "16:00"},
			{start: "16:00", end: "17:00"}
		],
	
	
	
		colors: {
			"Mathematics":	"#552222",
			"IT Workshop": 			"#337732",
			"Analog Electronic Circuits":	"#0055AA",
			"Digital Circuits": 			"#FF8800",
			"Skill Development for Professionals":	"#447777",
			"Technical Report Writing": 			"#009922",
			"Data Structures": 			"#DD2222",
			"Workshop Laboratory": 			"#0088FF",
			"MOOCs 2": 		"#AA00DD",
			"Analog Laboratory":		"#FFCC00",
			"Data Structures Laboratory":			"#222222",
			"App Development": "#452364",
			"Placement": "#DDEE78",
			"MOOCs 1": "#008877",
			"Digital Laboratory": "#145354",
			"Mentoring": "#AABB452",
		}
	}
};
