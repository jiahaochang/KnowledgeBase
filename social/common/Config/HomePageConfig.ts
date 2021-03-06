
//选科七门
export const subjectDisplayMap = {
    物理:{
        name:"物理",
        imgUrl:"vendor/images/subjects/physics.png"
    },
    化学:{
        name:"化学",
        imgUrl:"vendor/images/subjects/chemistry.png"
    },
    生物:{
        name:"生物",
        imgUrl:"vendor/images/subjects/biology.png"
    },
    政治:{
        name:"政治",
        imgUrl:"vendor/images/subjects/politics.png"
    },
    历史:{
        name:"历史",
        imgUrl:"vendor/images/subjects/history.png"
    },
    地理:{
        name:"地理",
        imgUrl:"vendor/images/subjects/geography.png"
    },
    技术:{
        name:"技术",
        imgUrl:"vendor/images/subjects/technology.png"
    }
}

//测评中心
export const assessCenterDisplayMap = {
    holland:{
        name:"职业兴趣测试",
        imgUrl:"vendor/images/tests/holland.png"
    },
    MBTI:{
        name:"职业性格测试",
        imgUrl:"vendor/images/tests/mbti.png"
    },
    multipleIntelligence:{
        name:"多元智能",
        imgUrl:"vendor/images/tests/multipleIntelligence.png"
    },
    values:{
        name:"价值观",
        imgUrl:"vendor/images/tests/values.png"
    },
}

//综合素质纪录八项
export const comprehensiveQualityDisplayMap = {
    "electiveCourse":{
        addTitle:"添加选修课",
    },
    "campusActivities":{
        addTitle:"添加校内活动",
        formItems:[
            [
                {
                    id:"eventHolderName",
                    name:"活动名称",
                    type:"input"
                },
                {
                    id:"qualityCategoryName",
                    name:"所属类别",
                    type:"input"
                },
            ],
            [
                {
                    id:"fromDate",
                    name:"活动时间",
                    type:"date",
                },
                {
                    id:"toDate",
                    name:"",
                    type:"date",
                }
            ],
            [
                {
                    id:"eventContent",
                    name:"活动表现",
                    type:"textarea"
                }
            ],
            [
                {
                    id:"pictures",
                    name:"相关证明",
                    type:"uploadImg"
                }
            ]
        ]
    },
    "offCampusPractice":{
        addTitle:"添加校外实践",
        formItems:[
            [
                {
                    id:"eventHolderName",
                    name:"活动名称",
                    type:"input"
                },
                {
                    id:"qualityCategoryName",
                    name:"所属类别",
                    type:"input"
                },
            ],
            [
                {
                    id:"fromDate",
                    name:"活动时间",
                    type:"date",
                },
                {
                    id:"toDate",
                    name:"",
                    type:"date",
                }
            ],
            [
                {
                    id:"eventContent",
                    name:"活动表现",
                    type:"textarea"
                }
            ],
            [
                {
                    id:"pictures",
                    name:"相关证明",
                    type:"uploadImg"
                }
            ]
        ]
    },
    "studentOrgan":{
        addTitle:"添加社团",
        formItems:[
            [
                {
                    id:"eventHolderName",
                    name:"社团名称",
                    type:"input"
                },
                {
                    id:"qualityCategoryName",
                    name:"所属类别",
                    type:"input"
                },
            ],
            [
                {
                    id:"myRole",
                    name:"我的角色",
                    type:"input",
                }
            ],
            [
                {
                    id:"eventContent",
                    name:"我的表现",
                    type:"textarea"
                }
            ],
            [
                {
                    id:"pictures",
                    name:"相关证明",
                    type:"uploadImg"
                }
            ]
        ]
    },
    "researchLearning":{
        addTitle:"添加研究性学习",
            formItems:[
            [
                {
                    id:"eventHolderName",
                    name:"课题名称",
                    type:"input"
                },
                {
                    id:"qualityCategoryName",
                    name:"所属类别",
                    type:"input"
                },
            ],
            [
                {
                    id:"eventContent",
                    name:"我的表现",
                    type:"textarea"
                }
            ],
            [
                {
                    id:"pictures",
                    name:"相关证明",
                    type:"uploadImg"
                }
            ]
        ]
    },
    "serveAsPosition":{
        addTitle:"添加职务",
        formItems:[
            [
                {
                    id:"eventHolderName",
                    name:"职务名称",
                    type:"input"
                },
                {
                    id:"qualityCategoryName",
                    name:"所属类别",
                    type:"input"
                },
            ],
            [
                {
                    id:"eventContent",
                    name:"职责描述",
                    type:"textarea"
                }
            ],
            [
                {
                    id:"pictures",
                    name:"相关证明",
                    type:"uploadImg"
                }
            ]
        ]
    },
    "mySpecialty":{
        addTitle:"添加特长",
        formItems:[
            [
                {
                    id:"eventHolderName",
                    name:"特长名称",
                    type:"input"
                },
                {
                    id:"qualityCategoryName",
                    name:"所属类别",
                    type:"input"
                },
            ],
            [
                {
                    id:"eventContent",
                    name:"特长描述",
                    type:"textarea"
                }
            ],
            [
                {
                    id:"pictures",
                    name:"相关证明",
                    type:"uploadImg"
                }
            ]
        ]
    },
    "honoraryTitle":{
        addTitle:"添加荣誉",
        formItems:[
            [
                {
                    id:"eventHolderName",
                    name:"荣誉称号",
                    type:"input"
                },
                {
                    id:"qualityCategoryName",
                    name:"所属类别",
                    type:"input"
                },
            ],
            [
                {
                    id:"pictures",
                    name:"相关证明",
                    type:"uploadImg"
                }
            ]
        ]
    }
};

export const QualityCategoryIDInfoMap = {
    'electiveCourse':{
        displayName: "选修课"
    },
    'campusActivities': {
        displayName: "校内活动"
    },
    'offCampusPractice': {
        displayName: "校外实践"
    },
    'studentOrgan': {
        displayName: "学生社团"
    },
    'researchLearning': {
        displayName: "研究性学习"
    },
    'serveAsPosition': {
        displayName: "担任职务"
    },
    'mySpecialty': {
        displayName: "我的特长"
    },
    'honoraryTitle': {
        displayName: "荣誉称号"
    }
}