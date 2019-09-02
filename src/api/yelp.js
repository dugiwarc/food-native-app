import axios from "axios";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization:
			"Bearer Coi5DQzNxCG_Qmz0G0oOc3myxN2RISuxx59eDfNp-cRTTRHHEBJN_iVmbLJwhChy2CwhATt2VWOV_7cYOFytLPtA85SO2Kiih6shubLJCsjm0d_UoPbKVYO4bhNtXXYx"
	}
});
