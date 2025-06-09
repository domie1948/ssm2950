const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmhn4b5/",
            name: "ssmhn4b5",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmhn4b5/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "高校社团管理系统"
        } 
    }
}
export default base
