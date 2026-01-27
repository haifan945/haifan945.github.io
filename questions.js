const allQuizData = {
    scratch: {
        'gesp': {
            '2024': {
                'level1': [
                    {
                        id: 'scratch_gesp_2024_1_1',
                        type: 'single',
                        question: '在Scratch中，以下哪个积木块可以让角色移动？',
                        options: [
                            '移动10步',
                            '说你好2秒',
                            '切换造型',
                            '播放声音'
                        ],
                        answer: 0,
                        explanation: '正确！"移动10步"积木块可以让角色在舞台上移动。'
                    },
                    {
                        id: 'scratch_gesp_2024_1_2',
                        type: 'single',
                        question: 'Scratch中，角色的坐标原点(0,0)位于舞台的什么位置？',
                        options: [
                            '左上角',
                            '右上角',
                            '正中央',
                            '左下角'
                        ],
                        answer: 2,
                        explanation: '正确！Scratch舞台的坐标原点(0,0)位于舞台的正中央。'
                    },
                    {
                        id: 'scratch_gesp_2024_1_3',
                        type: 'single',
                        question: '以下哪个不是Scratch中的数据类型？',
                        options: [
                            '数字',
                            '字符串',
                            '布尔值',
                            '浮点数'
                        ],
                        answer: 3,
                        explanation: '正确！Scratch中没有专门的浮点数类型，数字类型可以表示整数和小数。'
                    }
                ],
                'level2': [
                    {
                        id: 'scratch_gesp_2024_2_1',
                        type: 'single',
                        question: '在Scratch中，以下哪个积木块可以检测按键是否被按下？',
                        options: [
                            '当绿旗被点击',
                            '当按下空格键',
                            '如果...那么',
                            '重复执行'
                        ],
                        answer: 1,
                        explanation: '正确！"当按下空格键"积木块可以检测特定按键是否被按下。'
                    },
                    {
                        id: 'scratch_gesp_2024_2_2',
                        type: 'single',
                        question: 'Scratch中，以下哪个事件积木块不能作为程序的起始点？',
                        options: [
                            '当绿旗被点击',
                            '当角色被点击',
                            '当按下空格键',
                            '说你好2秒'
                        ],
                        answer: 3,
                        explanation: '正确！"说你好2秒"是动作积木块，不能作为程序的起始点。'
                    },
                    {
                        id: 'scratch_gesp_2024_2_3',
                        type: 'single',
                        question: '以下哪个积木块可以让角色在舞台上旋转？',
                        options: [
                            '移动10步',
                            '右转15度',
                            '切换造型',
                            '显示'
                        ],
                        answer: 1,
                        explanation: '正确！"右转15度"积木块可以让角色旋转。'
                    }
                ],
                'level3': [
                    {
                        id: 'scratch_gesp_2024_3_1',
                        type: 'single',
                        question: '在Scratch中，以下哪个积木块可以创建和管理变量？',
                        options: [
                            '数据',
                            '控制',
                            '外观',
                            '侦测'
                        ],
                        answer: 0,
                        explanation: '正确！"数据"类别中包含创建和管理变量的积木块。'
                    },
                    {
                        id: 'scratch_gesp_2024_3_2',
                        type: 'single',
                        question: 'Scratch中，以下哪个积木块可以实现条件判断？',
                        options: [
                            '重复执行',
                            '如果...那么',
                            '等待1秒',
                            '广播消息'
                        ],
                        answer: 1,
                        explanation: '正确！"如果...那么"积木块用于条件判断。'
                    },
                    {
                        id: 'scratch_gesp_2024_3_3',
                        type: 'single',
                        question: '以下哪个积木块可以让角色在舞台上随机移动？',
                        options: [
                            '移动10步',
                            '右转15度',
                            '面向随机方向',
                            '切换造型'
                        ],
                        answer: 2,
                        explanation: '正确！"面向随机方向"积木块可以让角色面向随机方向，配合移动积木块可以实现随机移动。'
                    }
                ],
                'level4': [
                    {
                        id: 'scratch_gesp_2024_4_1',
                        type: 'single',
                        question: '在Scratch中，以下哪个积木块可以实现循环？',
                        options: [
                            '如果...那么',
                            '重复执行',
                            '广播消息',
                            '等待1秒'
                        ],
                        answer: 1,
                        explanation: '正确！"重复执行"积木块用于实现循环。'
                    },
                    {
                        id: 'scratch_gesp_2024_4_2',
                        type: 'single',
                        question: 'Scratch中，以下哪个积木块可以检测两个角色是否接触？',
                        options: [
                            '碰到边缘就反弹',
                            '碰到鼠标指针',
                            '碰到角色1',
                            '移到鼠标指针'
                        ],
                        answer: 2,
                        explanation: '正确！"碰到角色1"积木块可以检测当前角色是否与指定角色接触。'
                    },
                    {
                        id: 'scratch_gesp_2024_4_3',
                        type: 'single',
                        question: '以下哪个积木块可以修改变量的值？',
                        options: [
                            '将变量设为0',
                            '如果...那么',
                            '重复执行',
                            '广播消息'
                        ],
                        answer: 0,
                        explanation: '正确！"将变量设为0"积木块可以修改变量的值。'
                    }
                ]
            },
            '2023': {
                'level1': [
                    {
                        id: 'scratch_gesp_2023_1_1',
                        type: 'single',
                        question: '在Scratch中，以下哪个不是默认的角色？',
                        options: [
                            '小猫',
                            '小狗',
                            '背景',
                            '舞台'
                        ],
                        answer: 1,
                        explanation: '正确！Scratch的默认角色是小猫，没有小狗。'
                    },
                    {
                        id: 'scratch_gesp_2023_1_2',
                        type: 'single',
                        question: 'Scratch中，舞台的大小是多少？',
                        options: [
                            '480x360',
                            '800x600',
                            '1024x768',
                            '1920x1080'
                        ],
                        answer: 0,
                        explanation: '正确！Scratch舞台的大小是480x360像素。'
                    },
                    {
                        id: 'scratch_gesp_2023_1_3',
                        type: 'single',
                        question: '以下哪个积木块可以让角色隐藏？',
                        options: [
                            '显示',
                            '隐藏',
                            '切换造型',
                            '移到最前面'
                        ],
                        answer: 1,
                        explanation: '正确！"隐藏"积木块可以让角色在舞台上不可见。'
                    }
                ],
                'level2': [
                    {
                        id: 'scratch_gesp_2023_2_1',
                        type: 'single',
                        question: '在Scratch中，以下哪个积木块可以播放声音？',
                        options: [
                            '播放声音',
                            '说你好2秒',
                            '切换造型',
                            '移动10步'
                        ],
                        answer: 0,
                        explanation: '正确！"播放声音"积木块可以播放指定的声音文件。'
                    },
                    {
                        id: 'scratch_gesp_2023_2_2',
                        type: 'single',
                        question: 'Scratch中，以下哪个积木块可以让角色移到鼠标指针位置？',
                        options: [
                            '移动10步',
                            '移到鼠标指针',
                            '面向鼠标指针',
                            '碰到鼠标指针'
                        ],
                        answer: 1,
                        explanation: '正确！"移到鼠标指针"积木块可以让角色立即移动到鼠标指针的位置。'
                    },
                    {
                        id: 'scratch_gesp_2023_2_3',
                        type: 'single',
                        question: '以下哪个积木块可以让角色在舞台上反弹？',
                        options: [
                            '碰到边缘就反弹',
                            '移动10步',
                            '右转15度',
                            '面向随机方向'
                        ],
                        answer: 0,
                        explanation: '正确！"碰到边缘就反弹"积木块可以让角色在碰到舞台边缘时反弹。'
                    }
                ],
                'level3': [
                    {
                        id: 'scratch_gesp_2023_3_1',
                        type: 'single',
                        question: '在Scratch中，以下哪个积木块可以实现广播消息？',
                        options: [
                            '广播消息',
                            '当接收到消息',
                            '如果...那么',
                            '重复执行'
                        ],
                        answer: 0,
                        explanation: '正确！"广播消息"积木块可以向其他角色或脚本发送消息。'
                    },
                    {
                        id: 'scratch_gesp_2023_3_2',
                        type: 'single',
                        question: 'Scratch中，以下哪个积木块可以让角色等待一段时间？',
                        options: [
                            '等待1秒',
                            '移动10步',
                            '右转15度',
                            '切换造型'
                        ],
                        answer: 0,
                        explanation: '正确！"等待1秒"积木块可以让角色暂停执行一段时间。'
                    },
                    {
                        id: 'scratch_gesp_2023_3_3',
                        type: 'single',
                        question: '以下哪个积木块可以让角色切换到下一个造型？',
                        options: [
                            '切换造型',
                            '下一个造型',
                            '显示',
                            '隐藏'
                        ],
                        answer: 1,
                        explanation: '正确！"下一个造型"积木块可以让角色切换到下一个可用的造型。'
                    }
                ],
                'level4': [
                    {
                        id: 'scratch_gesp_2024_4_1',
                        type: 'single',
                        question: '在Scratch中，以下哪个积木块可以实现循环？',
                        options: [
                            '如果...那么',
                            '重复执行',
                            '广播消息',
                            '等待1秒'
                        ],
                        answer: 1,
                        explanation: '正确！"重复执行"积木块用于实现循环。'
                    },
                    {
                        id: 'scratch_gesp_2024_4_2',
                        type: 'single',
                        question: 'Scratch中，以下哪个积木块可以检测两个角色是否接触？',
                        options: [
                            '碰到边缘就反弹',
                            '碰到鼠标指针',
                            '碰到角色1',
                            '移到鼠标指针'
                        ],
                        answer: 2,
                        explanation: '正确！"碰到角色1"积木块可以检测当前角色是否与指定角色接触。'
                    },
                    {
                        id: 'scratch_gesp_2024_4_3',
                        type: 'single',
                        question: '以下哪个积木块可以修改变量的值？',
                        options: [
                            '将变量设为0',
                            '如果...那么',
                            '重复执行',
                            '广播消息'
                        ],
                        answer: 0,
                        explanation: '正确！"将变量设为0"积木块可以修改变量的值。'
                    }
                ]
            },
            '2022': {
                'level1': [
                    {
                        id: 'scratch_gesp_2022_1_1',
                        type: 'single',
                        question: '在Scratch中，以下哪个是程序的开始积木块？',
                        options: [
                            '当绿旗被点击',
                            '当角色被点击',
                            '当按下空格键',
                            '如果...那么'
                        ],
                        answer: 0,
                        explanation: '正确！"当绿旗被点击"是最常用的程序开始积木块。'
                    },
                    {
                        id: 'scratch_gesp_2022_1_2',
                        type: 'single',
                        question: 'Scratch中，以下哪个不是积木块的类别？',
                        options: [
                            '动作',
                            '外观',
                            '控制',
                            '编程'
                        ],
                        answer: 3,
                        explanation: '正确！Scratch中没有"编程"这个积木块类别。'
                    },
                    {
                        id: 'scratch_gesp_2022_1_3',
                        type: 'single',
                        question: '以下哪个积木块可以让角色说出文字？',
                        options: [
                            '说你好2秒',
                            '播放声音',
                            '显示',
                            '隐藏'
                        ],
                        answer: 0,
                        explanation: '正确！"说你好2秒"积木块可以让角色在舞台上显示文字。'
                    }
                ],
                'level2': [
                    {
                        id: 'scratch_gesp_2022_2_1',
                        type: 'single',
                        question: '在Scratch中，以下哪个积木块可以让角色改变大小？',
                        options: [
                            '将大小增加10',
                            '移动10步',
                            '右转15度',
                            '切换造型'
                        ],
                        answer: 0,
                        explanation: '正确！"将大小增加10"积木块可以改变角色的大小。'
                    },
                    {
                        id: 'scratch_gesp_2022_2_2',
                        type: 'single',
                        question: 'Scratch中，以下哪个积木块可以让角色改变颜色特效？',
                        options: [
                            '将颜色特效增加25',
                            '移动10步',
                            '右转15度',
                            '切换造型'
                        ],
                        answer: 0,
                        explanation: '正确！"将颜色特效增加25"积木块可以改变角色的颜色外观。'
                    },
                    {
                        id: 'scratch_gesp_2022_2_3',
                        type: 'single',
                        question: '以下哪个积木块可以让角色移到指定坐标？',
                        options: [
                            '移到x:0 y:0',
                            '移动10步',
                            '面向x:0 y:0',
                            '碰到x:0 y:0'
                        ],
                        answer: 0,
                        explanation: '正确！"移到x:0 y:0"积木块可以让角色移动到舞台上的指定坐标位置。'
                    }
                ],
                'level3': [
                    {
                        id: 'scratch_gesp_2022_3_1',
                        type: 'single',
                        question: '在Scratch中，以下哪个积木块可以实现条件判断的嵌套？',
                        options: [
                            '如果...那么',
                            '如果...那么...否则',
                            '重复执行',
                            '重复执行直到'
                        ],
                        answer: 1,
                        explanation: '正确！"如果...那么...否则"积木块可以实现更复杂的条件判断。'
                    },
                    {
                        id: 'scratch_gesp_2022_3_2',
                        type: 'single',
                        question: 'Scratch中，以下哪个积木块可以让角色重复执行直到条件满足？',
                        options: [
                            '重复执行',
                            '重复执行10次',
                            '重复执行直到',
                            '如果...那么'
                        ],
                        answer: 2,
                        explanation: '正确！"重复执行直到"积木块可以让角色重复执行一段代码，直到指定条件满足。'
                    },
                    {
                        id: 'scratch_gesp_2022_3_3',
                        type: 'single',
                        question: '以下哪个积木块可以让角色在舞台上的图层顺序前移？',
                        options: [
                            '移到最前面',
                            '移到最后面',
                            '前移一层',
                            '后移一层'
                        ],
                        answer: 2,
                        explanation: '正确！"前移一层"积木块可以让角色在舞台上的图层顺序向前移动一层。'
                    }
                ],
                'level4': [
                    {
                        id: 'scratch_gesp_2022_4_1',
                        type: 'single',
                        question: '在Scratch中，以下哪个积木块可以创建列表？',
                        options: [
                            '数据',
                            '控制',
                            '外观',
                            '侦测'
                        ],
                        answer: 0,
                        explanation: '正确！"数据"类别中包含创建和管理列表的积木块。'
                    },
                    {
                        id: 'scratch_gesp_2022_4_2',
                        type: 'single',
                        question: 'Scratch中，以下哪个积木块可以让角色获取当前的时间？',
                        options: [
                            '当前时间',
                            '当前日期',
                            '计时器',
                            '等待1秒'
                        ],
                        answer: 2,
                        explanation: '正确！"计时器"积木块可以获取从绿旗点击开始经过的时间。'
                    },
                    {
                        id: 'scratch_gesp_2022_4_3',
                        type: 'single',
                        question: '以下哪个积木块可以让角色在舞台上绘制图形？',
                        options: [
                            '落笔',
                            '抬笔',
                            '移动10步',
                            '以上都是'
                        ],
                        answer: 3,
                        explanation: '正确！"落笔"、"抬笔"和"移动10步"等积木块配合使用可以在舞台上绘制图形。'
                    }
                ]
            }
        },
        'electronic': {
            '2024': {
                'level1': [
                    {
                        id: 'scratch_electronic_2024_1_1',
                        type: 'single',
                        question: '在Scratch中，以下哪个积木块可以让角色移动？',
                        options: [
                            '移动10步',
                            '说你好2秒',
                            '切换造型',
                            '播放声音'
                        ],
                        answer: 0,
                        explanation: '正确！"移动10步"积木块可以让角色在舞台上移动。'
                    },
                    {
                        id: 'scratch_electronic_2024_1_2',
                        type: 'single',
                        question: 'Scratch中，角色的坐标原点(0,0)位于舞台的什么位置？',
                        options: [
                            '左上角',
                            '右上角',
                            '正中央',
                            '左下角'
                        ],
                        answer: 2,
                        explanation: '正确！Scratch舞台的坐标原点(0,0)位于舞台的正中央。'
                    },
                    {
                        id: 'scratch_electronic_2024_1_3',
                        type: 'single',
                        question: '以下哪个不是Scratch中的数据类型？',
                        options: [
                            '数字',
                            '字符串',
                            '布尔值',
                            '浮点数'
                        ],
                        answer: 3,
                        explanation: '正确！Scratch中没有专门的浮点数类型，数字类型可以表示整数和小数。'
                    }
                ],
                'level2': [
                    {
                        id: 'scratch_electronic_2024_2_1',
                        type: 'single',
                        question: '在Scratch中，以下哪个积木块可以检测按键是否被按下？',
                        options: [
                            '当绿旗被点击',
                            '当按下空格键',
                            '如果...那么',
                            '重复执行'
                        ],
                        answer: 1,
                        explanation: '正确！"当按下空格键"积木块可以检测特定按键是否被按下。'
                    },
                    {
                        id: 'scratch_electronic_2024_2_2',
                        type: 'single',
                        question: 'Scratch中，以下哪个事件积木块不能作为程序的起始点？',
                        options: [
                            '当绿旗被点击',
                            '当角色被点击',
                            '当按下空格键',
                            '说你好2秒'
                        ],
                        answer: 3,
                        explanation: '正确！"说你好2秒"是动作积木块，不能作为程序的起始点。'
                    },
                    {
                        id: 'scratch_electronic_2024_2_3',
                        type: 'single',
                        question: '以下哪个积木块可以让角色在舞台上旋转？',
                        options: [
                            '移动10步',
                            '右转15度',
                            '切换造型',
                            '显示'
                        ],
                        answer: 1,
                        explanation: '正确！"右转15度"积木块可以让角色旋转。'
                    }
                ],
                'level3': [
                    {
                        id: 'scratch_electronic_2024_3_1',
                        type: 'single',
                        question: '在Scratch中，以下哪个积木块可以创建和管理变量？',
                        options: [
                            '数据',
                            '控制',
                            '外观',
                            '侦测'
                        ],
                        answer: 0,
                        explanation: '正确！"数据"类别中包含创建和管理变量的积木块。'
                    },
                    {
                        id: 'scratch_electronic_2024_3_2',
                        type: 'single',
                        question: 'Scratch中，以下哪个积木块可以实现条件判断？',
                        options: [
                            '重复执行',
                            '如果...那么',
                            '等待1秒',
                            '广播消息'
                        ],
                        answer: 1,
                        explanation: '正确！"如果...那么"积木块用于条件判断。'
                    },
                    {
                        id: 'scratch_electronic_2024_3_3',
                        type: 'single',
                        question: '以下哪个积木块可以让角色在舞台上随机移动？',
                        options: [
                            '移动10步',
                            '右转15度',
                            '面向随机方向',
                            '切换造型'
                        ],
                        answer: 2,
                        explanation: '正确！"面向随机方向"积木块可以让角色面向随机方向，配合移动积木块可以实现随机移动。'
                    }
                ],
                'level4': [
                    {
                        id: 'scratch_electronic_2024_4_1',
                        type: 'single',
                        question: '在Scratch中，以下哪个积木块可以实现循环？',
                        options: [
                            '如果...那么',
                            '重复执行',
                            '广播消息',
                            '等待1秒'
                        ],
                        answer: 1,
                        explanation: '正确！"重复执行"积木块用于实现循环。'
                    },
                    {
                        id: 'scratch_electronic_2024_4_2',
                        type: 'single',
                        question: 'Scratch中，以下哪个积木块可以检测两个角色是否接触？',
                        options: [
                            '碰到边缘就反弹',
                            '碰到鼠标指针',
                            '碰到角色1',
                            '移到鼠标指针'
                        ],
                        answer: 2,
                        explanation: '正确！"碰到角色1"积木块可以检测当前角色是否与指定角色接触。'
                    },
                    {
                        id: 'scratch_electronic_2024_4_3',
                        type: 'single',
                        question: '以下哪个积木块可以修改变量的值？',
                        options: [
                            '将变量设为0',
                            '如果...那么',
                            '重复执行',
                            '广播消息'
                        ],
                        answer: 0,
                        explanation: '正确！"将变量设为0"积木块可以修改变量的值。'
                    }
                ]
            },
            '2023': {
                'level1': [
                    {
                        id: 'scratch_electronic_2023_1_1',
                        type: 'single',
                        question: '在Scratch中，以下哪个不是默认的角色？',
                        options: [
                            '小猫',
                            '小狗',
                            '背景',
                            '舞台'
                        ],
                        answer: 1,
                        explanation: '正确！Scratch的默认角色是小猫，没有小狗。'
                    },
                    {
                        id: 'scratch_electronic_2023_1_2',
                        type: 'single',
                        question: 'Scratch中，舞台的大小是多少？',
                        options: [
                            '480x360',
                            '800x600',
                            '1024x768',
                            '1920x1080'
                        ],
                        answer: 0,
                        explanation: '正确！Scratch舞台的大小是480x360像素。'
                    },
                    {
                        id: 'scratch_electronic_2023_1_3',
                        type: 'single',
                        question: '以下哪个积木块可以让角色隐藏？',
                        options: [
                            '显示',
                            '隐藏',
                            '切换造型',
                            '移到最前面'
                        ],
                        answer: 1,
                        explanation: '正确！"隐藏"积木块可以让角色在舞台上不可见。'
                    }
                ],
                'level2': [
                    {
                        id: 'scratch_electronic_2023_2_1',
                        type: 'single',
                        question: '在Scratch中，以下哪个积木块可以播放声音？',
                        options: [
                            '播放声音',
                            '说你好2秒',
                            '切换造型',
                            '移动10步'
                        ],
                        answer: 0,
                        explanation: '正确！"播放声音"积木块可以播放指定的声音文件。'
                    },
                    {
                        id: 'scratch_electronic_2023_2_2',
                        type: 'single',
                        question: 'Scratch中，以下哪个积木块可以让角色移到鼠标指针位置？',
                        options: [
                            '移动10步',
                            '移到鼠标指针',
                            '面向鼠标指针',
                            '碰到鼠标指针'
                        ],
                        answer: 1,
                        explanation: '正确！"移到鼠标指针"积木块可以让角色立即移动到鼠标指针的位置。'
                    },
                    {
                        id: 'scratch_electronic_2023_2_3',
                        type: 'single',
                        question: '以下哪个积木块可以让角色在舞台上反弹？',
                        options: [
                            '碰到边缘就反弹',
                            '移动10步',
                            '右转15度',
                            '面向随机方向'
                        ],
                        answer: 0,
                        explanation: '正确！"碰到边缘就反弹"积木块可以让角色在碰到舞台边缘时反弹。'
                    }
                ],
                'level3': [
                    {
                        id: 'scratch_electronic_2023_3_1',
                        type: 'single',
                        question: '在Scratch中，以下哪个积木块可以实现广播消息？',
                        options: [
                            '广播消息',
                            '当接收到消息',
                            '如果...那么',
                            '重复执行'
                        ],
                        answer: 0,
                        explanation: '正确！"广播消息"积木块可以向其他角色或脚本发送消息。'
                    },
                    {
                        id: 'scratch_electronic_2023_3_2',
                        type: 'single',
                        question: 'Scratch中，以下哪个积木块可以让角色等待一段时间？',
                        options: [
                            '等待1秒',
                            '移动10步',
                            '右转15度',
                            '切换造型'
                        ],
                        answer: 0,
                        explanation: '正确！"等待1秒"积木块可以让角色暂停执行一段时间。'
                    },
                    {
                        id: 'scratch_electronic_2023_3_3',
                        type: 'single',
                        question: '以下哪个积木块可以让角色切换到下一个造型？',
                        options: [
                            '切换造型',
                            '下一个造型',
                            '显示',
                            '隐藏'
                        ],
                        answer: 1,
                        explanation: '正确！"下一个造型"积木块可以让角色切换到下一个可用的造型。'
                    }
                ],
                'level4': [
                    {
                        id: 'scratch_electronic_2023_4_1',
                        type: 'single',
                        question: '在Scratch中，以下哪个积木块可以实现循环？',
                        options: [
                            '如果...那么',
                            '重复执行',
                            '广播消息',
                            '等待1秒'
                        ],
                        answer: 1,
                        explanation: '正确！"重复执行"积木块用于实现循环。'
                    },
                    {
                        id: 'scratch_electronic_2023_4_2',
                        type: 'single',
                        question: 'Scratch中，以下哪个积木块可以检测两个角色是否接触？',
                        options: [
                            '碰到边缘就反弹',
                            '碰到鼠标指针',
                            '碰到角色1',
                            '移到鼠标指针'
                        ],
                        answer: 2,
                        explanation: '正确！"碰到角色1"积木块可以检测当前角色是否与指定角色接触。'
                    },
                    {
                        id: 'scratch_electronic_2023_4_3',
                        type: 'single',
                        question: '以下哪个积木块可以修改变量的值？',
                        options: [
                            '将变量设为0',
                            '如果...那么',
                            '重复执行',
                            '广播消息'
                        ],
                        answer: 0,
                        explanation: '正确！"将变量设为0"积木块可以修改变量的值。'
                    }
                ]
            },
            '2022': {
                'level1': [
                    {
                        id: 'scratch_electronic_2022_1_1',
                        type: 'single',
                        question: '在Scratch中，以下哪个是程序的开始积木块？',
                        options: [
                            '当绿旗被点击',
                            '当角色被点击',
                            '当按下空格键',
                            '如果...那么'
                        ],
                        answer: 0,
                        explanation: '正确！"当绿旗被点击"是最常用的程序开始积木块。'
                    },
                    {
                        id: 'scratch_electronic_2022_1_2',
                        type: 'single',
                        question: 'Scratch中，以下哪个不是积木块的类别？',
                        options: [
                            '动作',
                            '外观',
                            '控制',
                            '编程'
                        ],
                        answer: 3,
                        explanation: '正确！Scratch中没有"编程"这个积木块类别。'
                    },
                    {
                        id: 'scratch_electronic_2022_1_3',
                        type: 'single',
                        question: '以下哪个积木块可以让角色说出文字？',
                        options: [
                            '说你好2秒',
                            '播放声音',
                            '显示',
                            '隐藏'
                        ],
                        answer: 0,
                        explanation: '正确！"说你好2秒"积木块可以让角色在舞台上显示文字。'
                    }
                ],
                'level2': [
                    {
                        id: 'scratch_electronic_2022_2_1',
                        type: 'single',
                        question: '在Scratch中，以下哪个积木块可以让角色改变大小？',
                        options: [
                            '将大小增加10',
                            '移动10步',
                            '右转15度',
                            '切换造型'
                        ],
                        answer: 0,
                        explanation: '正确！"将大小增加10"积木块可以改变角色的大小。'
                    },
                    {
                        id: 'scratch_electronic_2022_2_2',
                        type: 'single',
                        question: 'Scratch中，以下哪个积木块可以让角色改变颜色特效？',
                        options: [
                            '将颜色特效增加25',
                            '移动10步',
                            '右转15度',
                            '切换造型'
                        ],
                        answer: 0,
                        explanation: '正确！"将颜色特效增加25"积木块可以改变角色的颜色外观。'
                    },
                    {
                        id: 'scratch_electronic_2022_2_3',
                        type: 'single',
                        question: '以下哪个积木块可以让角色移到指定坐标？',
                        options: [
                            '移到x:0 y:0',
                            '移动10步',
                            '面向x:0 y:0',
                            '碰到x:0 y:0'
                        ],
                        answer: 0,
                        explanation: '正确！"移到x:0 y:0"积木块可以让角色移动到舞台上的指定坐标位置。'
                    }
                ],
                'level3': [
                    {
                        id: 'scratch_electronic_2022_3_1',
                        type: 'single',
                        question: '在Scratch中，以下哪个积木块可以实现条件判断的嵌套？',
                        options: [
                            '如果...那么',
                            '如果...那么...否则',
                            '重复执行',
                            '重复执行直到'
                        ],
                        answer: 1,
                        explanation: '正确！"如果...那么...否则"积木块可以实现更复杂的条件判断。'
                    },
                    {
                        id: 'scratch_electronic_2022_3_2',
                        type: 'single',
                        question: 'Scratch中，以下哪个积木块可以让角色重复执行直到条件满足？',
                        options: [
                            '重复执行',
                            '重复执行10次',
                            '重复执行直到',
                            '如果...那么'
                        ],
                        answer: 2,
                        explanation: '正确！"重复执行直到"积木块可以让角色重复执行一段代码，直到指定条件满足。'
                    },
                    {
                        id: 'scratch_electronic_2022_3_3',
                        type: 'single',
                        question: '以下哪个积木块可以让角色在舞台上的图层顺序前移？',
                        options: [
                            '移到最前面',
                            '移到最后面',
                            '前移一层',
                            '后移一层'
                        ],
                        answer: 2,
                        explanation: '正确！"前移一层"积木块可以让角色在舞台上的图层顺序向前移动一层。'
                    }
                ],
                'level4': [
                    {
                        id: 'scratch_electronic_2022_4_1',
                        type: 'single',
                        question: '在Scratch中，以下哪个积木块可以创建列表？',
                        options: [
                            '数据',
                            '控制',
                            '外观',
                            '侦测'
                        ],
                        answer: 0,
                        explanation: '正确！"数据"类别中包含创建和管理列表的积木块。'
                    },
                    {
                        id: 'scratch_electronic_2022_4_2',
                        type: 'single',
                        question: 'Scratch中，以下哪个积木块可以让角色获取当前的时间？',
                        options: [
                            '当前时间',
                            '当前日期',
                            '计时器',
                            '等待1秒'
                        ],
                        answer: 2,
                        explanation: '正确！"计时器"积木块可以获取从绿旗点击开始经过的时间。'
                    },
                    {
                        id: 'scratch_electronic_2022_4_3',
                        type: 'single',
                        question: '以下哪个积木块可以让角色在舞台上绘制图形？',
                        options: [
                            '落笔',
                            '抬笔',
                            '移动10步',
                            '以上都是'
                        ],
                        answer: 3,
                        explanation: '正确！"落笔"、"抬笔"和"移动10步"等积木块配合使用可以在舞台上绘制图形。'
                    }
                ]
            }
        }
    },
    python: {
        'gesp': {
            '2024': {
                'level1': [
                    {
                        id: 'python_gesp_2024_1_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的变量名？',
                        options: [
                            'my_var',
                            '1var',
                            'my-var',
                            'class'
                        ],
                        answer: 0,
                        explanation: '正确！my_var是有效的Python变量名。变量名可以包含字母、数字和下划线，但不能以数字开头，不能包含连字符，也不能使用保留字。'
                    },
                    {
                        id: 'python_gesp_2024_1_2',
                        type: 'single',
                        question: 'Python中，以下哪个语句可以输出"Hello World"？',
                        options: [
                            'print("Hello World")',
                            'echo "Hello World"',
                            'console.log("Hello World")',
                            'printf("Hello World")'
                        ],
                        answer: 0,
                        explanation: '正确！在Python中，使用print()函数来输出内容。'
                    },
                    {
                        id: 'python_gesp_2024_1_3',
                        type: 'single',
                        question: '以下哪个不是Python的数据类型？',
                        options: [
                            'int',
                            'float',
                            'string',
                            'char'
                        ],
                        answer: 3,
                        explanation: '正确！Python中没有char数据类型，单个字符也是字符串。'
                    }
                ],
                'level2': [
                    {
                        id: 'python_gesp_2024_2_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的注释方式？',
                        options: [
                            '# 这是注释',
                            '// 这是注释',
                            '/* 这是注释 */',
                            '-- 这是注释'
                        ],
                        answer: 0,
                        explanation: '正确！在Python中，使用#符号来添加单行注释。'
                    },
                    {
                        id: 'python_gesp_2024_2_2',
                        type: 'single',
                        question: 'Python中，以下哪个运算符用于整除？',
                        options: [
                            '/',
                            '//',
                            '%',
                            '**'
                        ],
                        answer: 1,
                        explanation: '正确！//是整除运算符，返回商的整数部分。'
                    },
                    {
                        id: 'python_gesp_2024_2_3',
                        type: 'single',
                        question: '以下哪个函数可以获取用户输入？',
                        options: [
                            'input()',
                            'raw_input()',
                            'get_input()',
                            'scan()'
                        ],
                        answer: 0,
                        explanation: '正确！在Python 3中，使用input()函数获取用户输入。'
                    }
                ],
                'level3': [
                    {
                        id: 'python_gesp_2024_3_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的条件判断语句？',
                        options: [
                            'if x > 5:',
                            'if (x > 5)',
                            'if x > 5 then',
                            'if x > 5 {'
                        ],
                        answer: 0,
                        explanation: '正确！Python的if语句使用冒号结尾，不需要括号。'
                    },
                    {
                        id: 'python_gesp_2024_3_2',
                        type: 'single',
                        question: 'Python中，以下哪个循环语句会无限循环？',
                        options: [
                            'while True:',
                            'for i in range(10):',
                            'do:',
                            'loop:'
                        ],
                        answer: 0,
                        explanation: '正确！while True:会创建一个无限循环，直到遇到break语句。'
                    },
                    {
                        id: 'python_gesp_2024_3_3',
                        type: 'single',
                        question: '以下哪个是Python中的列表？',
                        options: [
                            '[1, 2, 3]',
                            '{1, 2, 3}',
                            '(1, 2, 3)',
                            '<1, 2, 3>'
                        ],
                        answer: 0,
                        explanation: '正确！Python中的列表使用方括号[]表示。'
                    }
                ],
                'level4': [
                    {
                        id: 'python_gesp_2024_4_1',
                        type: 'single',
                        question: '在Python中，以下哪个函数可以将字符串转换为整数？',
                        options: [
                            'int()',
                            'str()',
                            'float()',
                            'bool()'
                        ],
                        answer: 0,
                        explanation: '正确！int()函数可以将字符串或其他类型转换为整数。'
                    },
                    {
                        id: 'python_gesp_2024_4_2',
                        type: 'single',
                        question: 'Python中，以下哪个是字典的正确表示方式？',
                        options: [
                            "{'name': 'Alice', 'age': 10}",
                            "[('name', 'Alice'), ('age', 10)]",
                            "(name='Alice', age=10)",
                            "{name: 'Alice', age: 10}"
                        ],
                        answer: 0,
                        explanation: '正确！Python中的字典使用花括号{}，包含键值对。'
                    },
                    {
                        id: 'python_gesp_2024_4_3',
                        type: 'single',
                        question: '以下哪个方法可以向列表末尾添加元素？',
                        options: [
                            'append()',
                            'add()',
                            'insert()',
                            'push()'
                        ],
                        answer: 0,
                        explanation: '正确！append()方法用于向列表末尾添加元素。'
                    }
                ],
                'level5': [
                    {
                        id: 'python_gesp_2024_5_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的函数定义？',
                        options: [
                            'def my_function():',
                            'function my_function():',
                            'def my_function {}',
                            'function my_function() {'
                        ],
                        answer: 0,
                        explanation: '正确！Python使用def关键字定义函数，后面跟函数名和括号，以冒号结尾。'
                    },
                    {
                        id: 'python_gesp_2024_5_2',
                        type: 'single',
                        question: 'Python中，以下哪个关键字用于导入模块？',
                        options: [
                            'import',
                            'from',
                            'include',
                            'require'
                        ],
                        answer: 0,
                        explanation: '正确！import关键字用于导入Python模块。'
                    },
                    {
                        id: 'python_gesp_2024_5_3',
                        type: 'single',
                        question: '以下哪个是Python中的集合？',
                        options: [
                            '{1, 2, 3}',
                            '[1, 2, 3]',
                            '(1, 2, 3)',
                            '<1, 2, 3>'
                        ],
                        answer: 0,
                        explanation: '正确！Python中的集合使用花括号{}表示，但不包含键值对。'
                    }
                ],
                'level6': [
                    {
                        id: 'python_gesp_2024_6_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的类定义？',
                        options: [
                            'class MyClass:',
                            'def class MyClass:',
                            'class MyClass {}',
                            'class MyClass():'
                        ],
                        answer: 0,
                        explanation: '正确！Python使用class关键字定义类，后面跟类名，以冒号结尾。'
                    },
                    {
                        id: 'python_gesp_2024_6_2',
                        type: 'single',
                        question: 'Python中，以下哪个方法是类的构造函数？',
                        options: [
                            '__init__',
                            'constructor',
                            'init',
                            'new'
                        ],
                        answer: 0,
                        explanation: '正确！__init__方法是Python类的构造函数，在创建对象时自动调用。'
                    },
                    {
                        id: 'python_gesp_2024_6_3',
                        type: 'single',
                        question: '以下哪个异常处理语句是正确的？',
                        options: [
                            'try: ... except:',
                            'try { ... } catch { ... }',
                            'try ... catch:',
                            'try: ... catch:'
                        ],
                        answer: 0,
                        explanation: '正确！Python使用try...except语句进行异常处理。'
                    }
                ],
                'level7': [
                    {
                        id: 'python_gesp_2024_7_1',
                        type: 'single',
                        question: '在Python中，以下哪个是生成器表达式？',
                        options: [
                            '(x for x in range(10))',
                            '[x for x in range(10)]',
                            '{x for x in range(10)}',
                            'x for x in range(10)'
                        ],
                        answer: 0,
                        explanation: '正确！生成器表达式使用圆括号()，与列表推导式类似但更节省内存。'
                    },
                    {
                        id: 'python_gesp_2024_7_2',
                        type: 'single',
                        question: 'Python中，以下哪个装饰器用于将方法转换为属性？',
                        options: [
                            '@property',
                            '@staticmethod',
                            '@classmethod',
                            '@attribute'
                        ],
                        answer: 0,
                        explanation: '正确！@property装饰器可以将方法转换为只读属性。'
                    },
                    {
                        id: 'python_gesp_2024_7_3',
                        type: 'single',
                        question: '以下哪个模块用于处理JSON数据？',
                        options: [
                            'json',
                            'pickle',
                            'csv',
                            'xml'
                        ],
                        answer: 0,
                        explanation: '正确！json模块提供了处理JSON数据的函数。'
                    }
                ],
                'level8': [
                    {
                        id: 'python_gesp_2024_8_1',
                        type: 'single',
                        question: '在Python中，以下哪个是上下文管理器的正确实现？',
                        options: [
                            'with open("file.txt", "r") as f:',
                            'using open("file.txt", "r") as f:',
                            'open("file.txt", "r") as f:',
                            'with file("file.txt", "r") as f:'
                        ],
                        answer: 0,
                        explanation: '正确！with语句用于创建上下文管理器，自动处理资源的获取和释放。'
                    },
                    {
                        id: 'python_gesp_2024_8_2',
                        type: 'single',
                        question: 'Python中，以下哪个函数用于获取对象的所有属性和方法？',
                        options: [
                            'dir()',
                            'vars()',
                            'help()',
                            'inspect()'
                        ],
                        answer: 0,
                        explanation: '正确！dir()函数返回对象的所有属性和方法的列表。'
                    },
                    {
                        id: 'python_gesp_2024_8_3',
                        type: 'single',
                        question: '以下哪个模块用于多线程编程？',
                        options: [
                            'threading',
                            'multiprocessing',
                            'concurrent',
                            'asyncio'
                        ],
                        answer: 0,
                        explanation: '正确！threading模块提供了多线程编程的功能。'
                    }
                ]
            },
            '2023': {
                'level1': [
                    {
                        id: 'python_gesp_2023_1_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的变量赋值？',
                        options: [
                            'x = 10',
                            'x == 10',
                            'x := 10',
                            'x <- 10'
                        ],
                        answer: 0,
                        explanation: '正确！Python使用等号=进行变量赋值。'
                    },
                    {
                        id: 'python_gesp_2023_1_2',
                        type: 'single',
                        question: 'Python中，以下哪个是布尔类型的正确值？',
                        options: [
                            'True',
                            'true',
                            'TRUE',
                            'T'
                        ],
                        answer: 0,
                        explanation: '正确！Python中的布尔值True首字母大写。'
                    },
                    {
                        id: 'python_gesp_2023_1_3',
                        type: 'single',
                        question: '以下哪个不是Python的关键字？',
                        options: [
                            'function',
                            'def',
                            'if',
                            'for'
                        ],
                        answer: 0,
                        explanation: '正确！function不是Python的关键字，Python使用def定义函数。'
                    }
                ],
                'level2': [
                    {
                        id: 'python_gesp_2023_2_1',
                        type: 'single',
                        question: '在Python中，以下哪个运算符用于取模？',
                        options: [
                            '%',
                            '/',
                            '//',
                            '**'
                        ],
                        answer: 0,
                        explanation: '正确！%是取模运算符，返回除法的余数。'
                    },
                    {
                        id: 'python_gesp_2023_2_2',
                        type: 'single',
                        question: 'Python中，以下哪个是正确的字符串拼接方式？',
                        options: [
                            '"Hello" + "World"',
                            '"Hello" . "World"',
                            '"Hello".concat("World")',
                            '"Hello" & "World"'
                        ],
                        answer: 0,
                        explanation: '正确！Python使用+运算符拼接字符串。'
                    },
                    {
                        id: 'python_gesp_2023_2_3',
                        type: 'single',
                        question: '以下哪个函数可以获取字符串的长度？',
                        options: [
                            'len()',
                            'length()',
                            'size()',
                            'count()'
                        ],
                        answer: 0,
                        explanation: '正确！len()函数用于获取字符串、列表等对象的长度。'
                    }
                ],
                'level3': [
                    {
                        id: 'python_gesp_2023_3_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的for循环？',
                        options: [
                            'for i in range(5):',
                            'for (i = 0; i < 5; i++):',
                            'for i = 1 to 5:',
                            'for i < 5:'
                        ],
                        answer: 0,
                        explanation: '正确！Python的for循环使用in关键字遍历可迭代对象。'
                    },
                    {
                        id: 'python_gesp_2023_3_2',
                        type: 'single',
                        question: 'Python中，以下哪个关键字用于跳出循环？',
                        options: [
                            'break',
                            'exit',
                            'stop',
                            'end'
                        ],
                        answer: 0,
                        explanation: '正确！break关键字用于立即退出循环。'
                    },
                    {
                        id: 'python_gesp_2023_3_3',
                        type: 'single',
                        question: '以下哪个是Python中的元组？',
                        options: [
                            '(1, 2, 3)',
                            '[1, 2, 3]',
                            '{1, 2, 3}',
                            '<1, 2, 3>'
                        ],
                        answer: 0,
                        explanation: '正确！Python中的元组使用圆括号()表示，且不可修改。'
                    }
                ],
                'level4': [
                    {
                        id: 'python_gesp_2023_4_1',
                        type: 'single',
                        question: '在Python中，以下哪个方法可以移除列表中的指定元素？',
                        options: [
                            'remove()',
                            'delete()',
                            'pop()',
                            'discard()'
                        ],
                        answer: 0,
                        explanation: '正确！remove()方法用于移除列表中第一个匹配的元素。'
                    },
                    {
                        id: 'python_gesp_2023_4_2',
                        type: 'single',
                        question: 'Python中，以下哪个是正确的字符串格式化方式？',
                        options: [
                            'f"My name is {name}"',
                            '"My name is {name}".format(name=name)',
                            '"My name is %s" % name',
                            '以上都是'
                        ],
                        answer: 3,
                        explanation: '正确！Python支持多种字符串格式化方式，包括f-string、format()方法和%运算符。'
                    },
                    {
                        id: 'python_gesp_2023_4_3',
                        type: 'single',
                        question: '以下哪个函数可以将整数转换为字符串？',
                        options: [
                            'str()',
                            'int()',
                            'repr()',
                            'chr()'
                        ],
                        answer: 0,
                        explanation: '正确！str()函数可以将整数或其他类型转换为字符串。'
                    }
                ],
                'level5': [
                    {
                        id: 'python_gesp_2023_5_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的函数调用？',
                        options: [
                            'my_function()',
                            'call my_function()',
                            'execute my_function()',
                            'run my_function()'
                        ],
                        answer: 0,
                        explanation: '正确！Python中直接使用函数名加括号调用函数。'
                    },
                    {
                        id: 'python_gesp_2023_5_2',
                        type: 'single',
                        question: 'Python中，以下哪个模块用于数学计算？',
                        options: [
                            'math',
                            'calculator',
                            'numbers',
                            'algebra'
                        ],
                        answer: 0,
                        explanation: '正确！math模块提供了各种数学函数和常量。'
                    },
                    {
                        id: 'python_gesp_2023_5_3',
                        type: 'single',
                        question: '以下哪个是Python中的None值？',
                        options: [
                            'None',
                            'null',
                            'nil',
                            'undefined'
                        ],
                        answer: 0,
                        explanation: '正确！Python使用None表示空值或无值。'
                    }
                ],
                'level6': [
                    {
                        id: 'python_gesp_2023_6_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的继承语法？',
                        options: [
                            'class Child(Parent):',
                            'class Child extends Parent:',
                            'class Child inherits Parent:',
                            'class Child -> Parent:'
                        ],
                        answer: 0,
                        explanation: '正确！Python使用圆括号指定父类。'
                    },
                    {
                        id: 'python_gesp_2023_6_2',
                        type: 'single',
                        question: 'Python中，以下哪个方法用于处理未定义的属性访问？',
                        options: [
                            '__getattr__',
                            '__getattribute__',
                            '__get__',
                            '__access__'
                        ],
                        answer: 0,
                        explanation: '正确！__getattr__方法在访问不存在的属性时被调用。'
                    },
                    {
                        id: 'python_gesp_2023_6_3',
                        type: 'single',
                        question: '以下哪个是正确的文件读取方式？',
                        options: [
                            'with open("file.txt", "r") as f:',
                            'file = open("file.txt", "r")',
                            'f = file("file.txt", "r")',
                            '以上都是'
                        ],
                        answer: 3,
                        explanation: '正确！Python提供多种文件读取方式，其中with语句是推荐的方式。'
                    }
                ],
                'level7': [
                    {
                        id: 'python_gesp_2023_7_1',
                        type: 'single',
                        question: '在Python中，以下哪个是lambda函数的正确定义？',
                        options: [
                            'lambda x: x * 2',
                            'def lambda(x): return x * 2',
                            'lambda function(x) { return x * 2 }',
                            'lambda x -> x * 2'
                        ],
                        answer: 0,
                        explanation: '正确！lambda函数使用lambda关键字定义，后面跟参数和表达式。'
                    },
                    {
                        id: 'python_gesp_2023_7_2',
                        type: 'single',
                        question: 'Python中，以下哪个函数用于过滤列表元素？',
                        options: [
                            'filter()',
                            'map()',
                            'reduce()',
                            'filter_list()'
                        ],
                        answer: 0,
                        explanation: '正确！filter()函数用于根据条件过滤列表元素。'
                    },
                    {
                        id: 'python_gesp_2023_7_3',
                        type: 'single',
                        question: '以下哪个模块用于正则表达式？',
                        options: [
                            're',
                            'regex',
                            'pattern',
                            'match'
                        ],
                        answer: 0,
                        explanation: '正确！re模块提供了正则表达式的功能。'
                    }
                ],
                'level8': [
                    {
                        id: 'python_gesp_2023_8_1',
                        type: 'single',
                        question: '在Python中，以下哪个是异步函数的正确定义？',
                        options: [
                            'async def my_function():',
                            'def async my_function():',
                            'async function my_function() {',
                            'function async my_function() {'
                        ],
                        answer: 0,
                        explanation: '正确！Python使用async def定义异步函数。'
                    },
                    {
                        id: 'python_gesp_2023_8_2',
                        type: 'single',
                        question: 'Python中，以下哪个关键字用于等待异步操作完成？',
                        options: [
                            'await',
                            'wait',
                            'async',
                            'yield'
                        ],
                        answer: 0,
                        explanation: '正确！await关键字用于等待异步函数执行完成。'
                    },
                    {
                        id: 'python_gesp_2023_8_3',
                        type: 'single',
                        question: '以下哪个模块用于网络编程？',
                        options: [
                            'socket',
                            'network',
                            'http',
                            'tcp'
                        ],
                        answer: 0,
                        explanation: '正确！socket模块提供了网络编程的基础功能。'
                    }
                ]
            },
            '2022': {
                'level1': [
                    {
                        id: 'python_gesp_2022_1_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的多行注释？',
                        options: [
                            '"""这是多行注释"""',
                            '/*这是多行注释*/',
                            '<!--这是多行注释-->',
                            '#这是多行注释'
                        ],
                        answer: 0,
                        explanation: '正确！Python使用三引号"""创建多行字符串，也可用作多行注释。'
                    },
                    {
                        id: 'python_gesp_2022_1_2',
                        type: 'single',
                        question: 'Python中，以下哪个是正确的比较运算符？',
                        options: [
                            '==',
                            '===',
                            '=:',
                            ':=',
                        ],
                        answer: 0,
                        explanation: '正确！Python使用==进行相等比较。'
                    },
                    {
                        id: 'python_gesp_2022_1_3',
                        type: 'single',
                        question: '以下哪个不是Python的数值类型？',
                        options: [
                            'complex',
                            'int',
                            'float',
                            'decimal'
                        ],
                        answer: 3,
                        explanation: '正确！decimal不是Python的内置数值类型，需要导入decimal模块。'
                    }
                ],
                'level2': [
                    {
                        id: 'python_gesp_2022_2_1',
                        type: 'single',
                        question: '在Python中，以下哪个运算符用于幂运算？',
                        options: [
                            '**',
                            '^',
                            'pow',
                            '*'
                        ],
                        answer: 0,
                        explanation: '正确！**是Python的幂运算符，如2**3表示2的3次方。'
                    },
                    {
                        id: 'python_gesp_2022_2_2',
                        type: 'single',
                        question: 'Python中，以下哪个是正确的字符串索引方式？',
                        options: [
                            's[0]',
                            's(0)',
                            's{0}',
                            's<0>'
                        ],
                        answer: 0,
                        explanation: '正确！Python使用方括号[]进行字符串索引，索引从0开始。'
                    },
                    {
                        id: 'python_gesp_2022_2_3',
                        type: 'single',
                        question: '以下哪个函数可以将字符串转换为浮点数？',
                        options: [
                            'float()',
                            'int()',
                            'str()',
                            'double()'
                        ],
                        answer: 0,
                        explanation: '正确！float()函数可以将字符串或整数转换为浮点数。'
                    }
                ],
                'level3': [
                    {
                        id: 'python_gesp_2022_3_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的while循环？',
                        options: [
                            'while x > 0:',
                            'while (x > 0) {',
                            'while x > 0 do',
                            'while x > 0:'
                        ],
                        answer: 0,
                        explanation: '正确！Python的while循环使用冒号结尾，不需要括号。'
                    },
                    {
                        id: 'python_gesp_2022_3_2',
                        type: 'single',
                        question: 'Python中，以下哪个关键字用于继续循环的下一次迭代？',
                        options: [
                            'continue',
                            'break',
                            'pass',
                            'next'
                        ],
                        answer: 0,
                        explanation: '正确！continue关键字用于跳过当前循环的剩余部分，直接进入下一次迭代。'
                    },
                    {
                        id: 'python_gesp_2022_3_3',
                        type: 'single',
                        question: '以下哪个是Python中的空语句？',
                        options: [
                            'pass',
                            'null',
                            'empty',
                            'void'
                        ],
                        answer: 0,
                        explanation: '正确！pass是Python中的空语句，不执行任何操作。'
                    }
                ],
                'level4': [
                    {
                        id: 'python_gesp_2022_4_1',
                        type: 'single',
                        question: '在Python中，以下哪个方法可以反转列表？',
                        options: [
                            'reverse()',
                            'sort()',
                            'sorted()',
                            'reversed()'
                        ],
                        answer: 0,
                        explanation: '正确！reverse()方法用于原地反转列表。'
                    },
                    {
                        id: 'python_gesp_2022_4_2',
                        type: 'single',
                        question: 'Python中，以下哪个是正确的列表切片方式？',
                        options: [
                            'list[1:3]',
                            'list(1:3)',
                            'list{1:3}',
                            'list<1:3>'
                        ],
                        answer: 0,
                        explanation: '正确！Python使用方括号和冒号进行列表切片。'
                    },
                    {
                        id: 'python_gesp_2022_4_3',
                        type: 'single',
                        question: '以下哪个函数可以获取字典中所有的键？',
                        options: [
                            'keys()',
                            'values()',
                            'items()',
                            'get()'
                        ],
                        answer: 0,
                        explanation: '正确！keys()方法返回字典中所有键的视图。'
                    }
                ],
                'level5': [
                    {
                        id: 'python_gesp_2022_5_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的函数返回语句？',
                        options: [
                            'return x',
                            'return x;',
                            'return(x)',
                            '以上都是'
                        ],
                        answer: 3,
                        explanation: '正确！Python的return语句可以有多种写法，有无括号和分号都是允许的。'
                    },
                    {
                        id: 'python_gesp_2022_5_2',
                        type: 'single',
                        question: 'Python中，以下哪个模块用于随机数生成？',
                        options: [
                            'random',
                            'math',
                            'numbers',
                            'statistics'
                        ],
                        answer: 0,
                        explanation: '正确！random模块提供了生成随机数的函数。'
                    },
                    {
                        id: 'python_gesp_2022_5_3',
                        type: 'single',
                        question: '以下哪个是Python中的集合推导式？',
                        options: [
                            '{x for x in range(10)}',
                            '[x for x in range(10)]',
                            '(x for x in range(10))',
                            'set(x for x in range(10))'
                        ],
                        answer: 0,
                        explanation: '正确！集合推导式使用花括号{}，类似于列表推导式。'
                    }
                ],
                'level6': [
                    {
                        id: 'python_gesp_2022_6_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的异常抛出语句？',
                        options: [
                            'raise Exception("错误信息")',
                            'throw Exception("错误信息")',
                            'error Exception("错误信息")',
                            'exception Exception("错误信息")'
                        ],
                        answer: 0,
                        explanation: '正确！Python使用raise关键字抛出异常。'
                    },
                    {
                        id: 'python_gesp_2022_6_2',
                        type: 'single',
                        question: 'Python中，以下哪个方法用于获取对象的字符串表示？',
                        options: [
                            '__str__',
                            '__repr__',
                            '__unicode__',
                            '__string__'
                        ],
                        answer: 0,
                        explanation: '正确！__str__方法定义了对象的字符串表示，用于str()函数和print()函数。'
                    },
                    {
                        id: 'python_gesp_2022_6_3',
                        type: 'single',
                        question: '以下哪个是正确的文件写入方式？',
                        options: [
                            'open("file.txt", "w")',
                            'open("file.txt", "r+")',
                            'open("file.txt", "a")',
                            '以上都是'
                        ],
                        answer: 3,
                        explanation: '正确！Python提供多种文件打开模式，"w"、"r+"和"a"都可以用于写入文件。'
                    }
                ],
                'level7': [
                    {
                        id: 'python_gesp_2022_7_1',
                        type: 'single',
                        question: '在Python中，以下哪个函数用于将列表映射为新列表？',
                        options: [
                            'map()',
                            'filter()',
                            'reduce()',
                            'transform()'
                        ],
                        answer: 0,
                        explanation: '正确！map()函数将函数应用于列表中的每个元素，返回结果列表。'
                    },
                    {
                        id: 'python_gesp_2022_7_2',
                        type: 'single',
                        question: 'Python中，以下哪个装饰器用于定义静态方法？',
                        options: [
                            '@staticmethod',
                            '@classmethod',
                            '@property',
                            '@static'
                        ],
                        answer: 0,
                        explanation: '正确！@staticmethod装饰器用于定义静态方法，不需要访问实例或类。'
                    },
                    {
                        id: 'python_gesp_2022_7_3',
                        type: 'single',
                        question: '以下哪个模块用于处理日期和时间？',
                        options: [
                            'datetime',
                            'time',
                            'date',
                            'calendar'
                        ],
                        answer: 0,
                        explanation: '正确！datetime模块提供了处理日期和时间的类和函数。'
                    }
                ],
                'level8': [
                    {
                        id: 'python_gesp_2022_8_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的上下文管理器协议方法？',
                        options: [
                            '__enter__和__exit__',
                            'open和close',
                            'start和stop',
                            'begin和end'
                        ],
                        answer: 0,
                        explanation: '正确！实现了__enter__和__exit__方法的对象可以作为上下文管理器使用。'
                    },
                    {
                        id: 'python_gesp_2022_8_2',
                        type: 'single',
                        question: 'Python中，以下哪个函数用于动态导入模块？',
                        options: [
                            'importlib.import_module()',
                            'dynamic_import()',
                            'load_module()',
                            'require()'
                        ],
                        answer: 0,
                        explanation: '正确！importlib模块的import_module()函数用于动态导入模块。'
                    },
                    {
                        id: 'python_gesp_2022_8_3',
                        type: 'single',
                        question: '以下哪个模块用于进程间通信？',
                        options: [
                            'multiprocessing',
                            'threading',
                            'concurrent',
                            'asyncio'
                        ],
                        answer: 0,
                        explanation: '正确！multiprocessing模块提供了进程间通信的功能。'
                    }
                ]
            }
        },
        'electronic': {
            '2024': {
                'level1': [
                    {
                        id: 'python_electronic_2024_1_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的变量名？',
                        options: [
                            'my_var',
                            '1var',
                            'my-var',
                            'class'
                        ],
                        answer: 0,
                        explanation: '正确！my_var是有效的Python变量名。变量名可以包含字母、数字和下划线，但不能以数字开头，不能包含连字符，也不能使用保留字。'
                    },
                    {
                        id: 'python_electronic_2024_1_2',
                        type: 'single',
                        question: 'Python中，以下哪个语句可以输出"Hello World"？',
                        options: [
                            'print("Hello World")',
                            'echo "Hello World"',
                            'console.log("Hello World")',
                            'printf("Hello World")'
                        ],
                        answer: 0,
                        explanation: '正确！在Python中，使用print()函数来输出内容。'
                    },
                    {
                        id: 'python_electronic_2024_1_3',
                        type: 'single',
                        question: '以下哪个不是Python的数据类型？',
                        options: [
                            'int',
                            'float',
                            'string',
                            'char'
                        ],
                        answer: 3,
                        explanation: '正确！Python中没有char数据类型，单个字符也是字符串。'
                    }
                ],
                'level2': [
                    {
                        id: 'python_electronic_2024_2_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的注释方式？',
                        options: [
                            '# 这是注释',
                            '// 这是注释',
                            '/* 这是注释 */',
                            '-- 这是注释'
                        ],
                        answer: 0,
                        explanation: '正确！在Python中，使用#符号来添加单行注释。'
                    },
                    {
                        id: 'python_electronic_2024_2_2',
                        type: 'single',
                        question: 'Python中，以下哪个运算符用于整除？',
                        options: [
                            '/',
                            '//',
                            '%',
                            '**'
                        ],
                        answer: 1,
                        explanation: '正确！//是整除运算符，返回商的整数部分。'
                    },
                    {
                        id: 'python_electronic_2024_2_3',
                        type: 'single',
                        question: '以下哪个函数可以获取用户输入？',
                        options: [
                            'input()',
                            'raw_input()',
                            'get_input()',
                            'scan()'
                        ],
                        answer: 0,
                        explanation: '正确！在Python 3中，使用input()函数获取用户输入。'
                    }
                ],
                'level3': [
                    {
                        id: 'python_electronic_2024_3_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的条件判断语句？',
                        options: [
                            'if x > 5:',
                            'if (x > 5)',
                            'if x > 5 then',
                            'if x > 5 {'
                        ],
                        answer: 0,
                        explanation: '正确！Python的if语句使用冒号结尾，不需要括号。'
                    },
                    {
                        id: 'python_electronic_2024_3_2',
                        type: 'single',
                        question: 'Python中，以下哪个循环语句会无限循环？',
                        options: [
                            'while True:',
                            'for i in range(10):',
                            'do:',
                            'loop:'
                        ],
                        answer: 0,
                        explanation: '正确！while True:会创建一个无限循环，直到遇到break语句。'
                    },
                    {
                        id: 'python_electronic_2024_3_3',
                        type: 'single',
                        question: '以下哪个是Python中的列表？',
                        options: [
                            '[1, 2, 3]',
                            '{1, 2, 3}',
                            '(1, 2, 3)',
                            '<1, 2, 3>'
                        ],
                        answer: 0,
                        explanation: '正确！Python中的列表使用方括号[]表示。'
                    }
                ],
                'level4': [
                    {
                        id: 'python_electronic_2024_4_1',
                        type: 'single',
                        question: '在Python中，以下哪个函数可以将字符串转换为整数？',
                        options: [
                            'int()',
                            'str()',
                            'float()',
                            'bool()'
                        ],
                        answer: 0,
                        explanation: '正确！int()函数可以将字符串或其他类型转换为整数。'
                    },
                    {
                        id: 'python_electronic_2024_4_2',
                        type: 'single',
                        question: 'Python中，以下哪个是字典的正确表示方式？',
                        options: [
                            "{'name': 'Alice', 'age': 10}",
                            "[('name', 'Alice'), ('age', 10)]",
                            "(name='Alice', age=10)",
                            "{name: 'Alice', age: 10}"
                        ],
                        answer: 0,
                        explanation: '正确！Python中的字典使用花括号{}，包含键值对。'
                    },
                    {
                        id: 'python_electronic_2024_4_3',
                        type: 'single',
                        question: '以下哪个方法可以向列表末尾添加元素？',
                        options: [
                            'append()',
                            'add()',
                            'insert()',
                            'push()'
                        ],
                        answer: 0,
                        explanation: '正确！append()方法用于向列表末尾添加元素。'
                    }
                ],
                'level5': [
                    {
                        id: 'python_electronic_2024_5_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的函数定义？',
                        options: [
                            'def my_function():',
                            'function my_function():',
                            'def my_function {}',
                            'function my_function() {'
                        ],
                        answer: 0,
                        explanation: '正确！Python使用def关键字定义函数，后面跟函数名和括号，以冒号结尾。'
                    },
                    {
                        id: 'python_electronic_2024_5_2',
                        type: 'single',
                        question: 'Python中，以下哪个关键字用于导入模块？',
                        options: [
                            'import',
                            'from',
                            'include',
                            'require'
                        ],
                        answer: 0,
                        explanation: '正确！import关键字用于导入Python模块。'
                    },
                    {
                        id: 'python_electronic_2024_5_3',
                        type: 'single',
                        question: '以下哪个是Python中的集合？',
                        options: [
                            '{1, 2, 3}',
                            '[1, 2, 3]',
                            '(1, 2, 3)',
                            '<1, 2, 3>'
                        ],
                        answer: 0,
                        explanation: '正确！Python中的集合使用花括号{}表示，但不包含键值对。'
                    }
                ],
                'level6': [
                    {
                        id: 'python_electronic_2024_6_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的类定义？',
                        options: [
                            'class MyClass:',
                            'def class MyClass:',
                            'class MyClass {}',
                            'class MyClass():'
                        ],
                        answer: 0,
                        explanation: '正确！Python使用class关键字定义类，后面跟类名，以冒号结尾。'
                    },
                    {
                        id: 'python_electronic_2024_6_2',
                        type: 'single',
                        question: 'Python中，以下哪个方法是类的构造函数？',
                        options: [
                            '__init__',
                            'constructor',
                            'init',
                            'new'
                        ],
                        answer: 0,
                        explanation: '正确！__init__方法是Python类的构造函数，在创建对象时自动调用。'
                    },
                    {
                        id: 'python_electronic_2024_6_3',
                        type: 'single',
                        question: '以下哪个异常处理语句是正确的？',
                        options: [
                            'try: ... except:',
                            'try { ... } catch { ... }',
                            'try ... catch:',
                            'try: ... catch:'
                        ],
                        answer: 0,
                        explanation: '正确！Python使用try...except语句进行异常处理。'
                    }
                ],
                'level7': [
                    {
                        id: 'python_electronic_2024_7_1',
                        type: 'single',
                        question: '在Python中，以下哪个是生成器表达式？',
                        options: [
                            '(x for x in range(10))',
                            '[x for x in range(10)]',
                            '{x for x in range(10)}',
                            'x for x in range(10)'
                        ],
                        answer: 0,
                        explanation: '正确！生成器表达式使用圆括号()，与列表推导式类似但更节省内存。'
                    },
                    {
                        id: 'python_electronic_2024_7_2',
                        type: 'single',
                        question: 'Python中，以下哪个装饰器用于将方法转换为属性？',
                        options: [
                            '@property',
                            '@staticmethod',
                            '@classmethod',
                            '@attribute'
                        ],
                        answer: 0,
                        explanation: '正确！@property装饰器可以将方法转换为只读属性。'
                    },
                    {
                        id: 'python_electronic_2024_7_3',
                        type: 'single',
                        question: '以下哪个模块用于处理JSON数据？',
                        options: [
                            'json',
                            'pickle',
                            'csv',
                            'xml'
                        ],
                        answer: 0,
                        explanation: '正确！json模块提供了处理JSON数据的函数。'
                    }
                ],
                'level8': [
                    {
                        id: 'python_electronic_2024_8_1',
                        type: 'single',
                        question: '在Python中，以下哪个是上下文管理器的正确实现？',
                        options: [
                            'with open("file.txt", "r") as f:',
                            'using open("file.txt", "r") as f:',
                            'open("file.txt", "r") as f:',
                            'with file("file.txt", "r") as f:'
                        ],
                        answer: 0,
                        explanation: '正确！with语句用于创建上下文管理器，自动处理资源的获取和释放。'
                    },
                    {
                        id: 'python_electronic_2024_8_2',
                        type: 'single',
                        question: 'Python中，以下哪个函数用于获取对象的所有属性和方法？',
                        options: [
                            'dir()',
                            'vars()',
                            'help()',
                            'inspect()'
                        ],
                        answer: 0,
                        explanation: '正确！dir()函数返回对象的所有属性和方法的列表。'
                    },
                    {
                        id: 'python_electronic_2024_8_3',
                        type: 'single',
                        question: '以下哪个模块用于多线程编程？',
                        options: [
                            'threading',
                            'multiprocessing',
                            'concurrent',
                            'asyncio'
                        ],
                        answer: 0,
                        explanation: '正确！threading模块提供了多线程编程的功能。'
                    }
                ]
            },
            '2023': {
                'level1': [
                    {
                        id: 'python_electronic_2023_1_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的变量赋值？',
                        options: [
                            'x = 10',
                            'x == 10',
                            'x := 10',
                            'x <- 10'
                        ],
                        answer: 0,
                        explanation: '正确！Python使用等号=进行变量赋值。'
                    },
                    {
                        id: 'python_electronic_2023_1_2',
                        type: 'single',
                        question: 'Python中，以下哪个是布尔类型的正确值？',
                        options: [
                            'True',
                            'true',
                            'TRUE',
                            'T'
                        ],
                        answer: 0,
                        explanation: '正确！Python中的布尔值True首字母大写。'
                    },
                    {
                        id: 'python_electronic_2023_1_3',
                        type: 'single',
                        question: '以下哪个不是Python的关键字？',
                        options: [
                            'function',
                            'def',
                            'if',
                            'for'
                        ],
                        answer: 0,
                        explanation: '正确！function不是Python的关键字，Python使用def定义函数。'
                    }
                ],
                'level2': [
                    {
                        id: 'python_electronic_2023_2_1',
                        type: 'single',
                        question: '在Python中，以下哪个运算符用于取模？',
                        options: [
                            '%',
                            '/',
                            '//',
                            '**'
                        ],
                        answer: 0,
                        explanation: '正确！%是取模运算符，返回除法的余数。'
                    },
                    {
                        id: 'python_electronic_2023_2_2',
                        type: 'single',
                        question: 'Python中，以下哪个是正确的字符串拼接方式？',
                        options: [
                            '"Hello" + "World"',
                            '"Hello" . "World"',
                            '"Hello".concat("World")',
                            '"Hello" & "World"'
                        ],
                        answer: 0,
                        explanation: '正确！Python使用+运算符拼接字符串。'
                    },
                    {
                        id: 'python_electronic_2023_2_3',
                        type: 'single',
                        question: '以下哪个函数可以获取字符串的长度？',
                        options: [
                            'len()',
                            'length()',
                            'size()',
                            'count()'
                        ],
                        answer: 0,
                        explanation: '正确！len()函数用于获取字符串、列表等对象的长度。'
                    }
                ],
                'level3': [
                    {
                        id: 'python_electronic_2023_3_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的for循环？',
                        options: [
                            'for i in range(5):',
                            'for (i = 0; i < 5; i++):',
                            'for i = 1 to 5:',
                            'for i < 5:'
                        ],
                        answer: 0,
                        explanation: '正确！Python的for循环使用in关键字遍历可迭代对象。'
                    },
                    {
                        id: 'python_electronic_2023_3_2',
                        type: 'single',
                        question: 'Python中，以下哪个关键字用于跳出循环？',
                        options: [
                            'break',
                            'exit',
                            'stop',
                            'end'
                        ],
                        answer: 0,
                        explanation: '正确！break关键字用于立即退出循环。'
                    },
                    {
                        id: 'python_electronic_2023_3_3',
                        type: 'single',
                        question: '以下哪个是Python中的元组？',
                        options: [
                            '(1, 2, 3)',
                            '[1, 2, 3]',
                            '{1, 2, 3}',
                            '<1, 2, 3>'
                        ],
                        answer: 0,
                        explanation: '正确！Python中的元组使用圆括号()表示，且不可修改。'
                    }
                ],
                'level4': [
                    {
                        id: 'python_electronic_2023_4_1',
                        type: 'single',
                        question: '在Python中，以下哪个方法可以移除列表中的指定元素？',
                        options: [
                            'remove()',
                            'delete()',
                            'pop()',
                            'discard()'
                        ],
                        answer: 0,
                        explanation: '正确！remove()方法用于移除列表中第一个匹配的元素。'
                    },
                    {
                        id: 'python_electronic_2023_4_2',
                        type: 'single',
                        question: 'Python中，以下哪个是正确的字符串格式化方式？',
                        options: [
                            'f"My name is {name}"',
                            '"My name is {name}".format(name=name)',
                            '"My name is %s" % name',
                            '以上都是'
                        ],
                        answer: 3,
                        explanation: '正确！Python支持多种字符串格式化方式，包括f-string、format()方法和%运算符。'
                    },
                    {
                        id: 'python_electronic_2023_4_3',
                        type: 'single',
                        question: '以下哪个函数可以将整数转换为字符串？',
                        options: [
                            'str()',
                            'int()',
                            'repr()',
                            'chr()'
                        ],
                        answer: 0,
                        explanation: '正确！str()函数可以将整数或其他类型转换为字符串。'
                    }
                ],
                'level5': [
                    {
                        id: 'python_electronic_2023_5_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的函数调用？',
                        options: [
                            'my_function()',
                            'call my_function()',
                            'execute my_function()',
                            'run my_function()'
                        ],
                        answer: 0,
                        explanation: '正确！Python中直接使用函数名加括号调用函数。'
                    },
                    {
                        id: 'python_electronic_2023_5_2',
                        type: 'single',
                        question: 'Python中，以下哪个模块用于数学计算？',
                        options: [
                            'math',
                            'calculator',
                            'numbers',
                            'algebra'
                        ],
                        answer: 0,
                        explanation: '正确！math模块提供了各种数学函数和常量。'
                    },
                    {
                        id: 'python_electronic_2023_5_3',
                        type: 'single',
                        question: '以下哪个是Python中的None值？',
                        options: [
                            'None',
                            'null',
                            'nil',
                            'undefined'
                        ],
                        answer: 0,
                        explanation: '正确！Python使用None表示空值或无值。'
                    }
                ],
                'level6': [
                    {
                        id: 'python_electronic_2023_6_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的继承语法？',
                        options: [
                            'class Child(Parent):',
                            'class Child extends Parent:',
                            'class Child inherits Parent:',
                            'class Child -> Parent:'
                        ],
                        answer: 0,
                        explanation: '正确！Python使用圆括号指定父类。'
                    },
                    {
                        id: 'python_electronic_2023_6_2',
                        type: 'single',
                        question: 'Python中，以下哪个方法用于处理未定义的属性访问？',
                        options: [
                            '__getattr__',
                            '__getattribute__',
                            '__get__',
                            '__access__'
                        ],
                        answer: 0,
                        explanation: '正确！__getattr__方法在访问不存在的属性时被调用。'
                    },
                    {
                        id: 'python_electronic_2023_6_3',
                        type: 'single',
                        question: '以下哪个是正确的文件读取方式？',
                        options: [
                            'with open("file.txt", "r") as f:',
                            'file = open("file.txt", "r")',
                            'f = file("file.txt", "r")',
                            '以上都是'
                        ],
                        answer: 3,
                        explanation: '正确！Python提供多种文件读取方式，其中with语句是推荐的方式。'
                    }
                ],
                'level7': [
                    {
                        id: 'python_electronic_2023_7_1',
                        type: 'single',
                        question: '在Python中，以下哪个是lambda函数的正确定义？',
                        options: [
                            'lambda x: x * 2',
                            'def lambda(x): return x * 2',
                            'lambda function(x) { return x * 2 }',
                            'lambda x -> x * 2'
                        ],
                        answer: 0,
                        explanation: '正确！lambda函数使用lambda关键字定义，后面跟参数和表达式。'
                    },
                    {
                        id: 'python_electronic_2023_7_2',
                        type: 'single',
                        question: 'Python中，以下哪个函数用于过滤列表元素？',
                        options: [
                            'filter()',
                            'map()',
                            'reduce()',
                            'filter_list()'
                        ],
                        answer: 0,
                        explanation: '正确！filter()函数用于根据条件过滤列表元素。'
                    },
                    {
                        id: 'python_electronic_2023_7_3',
                        type: 'single',
                        question: '以下哪个模块用于正则表达式？',
                        options: [
                            're',
                            'regex',
                            'pattern',
                            'match'
                        ],
                        answer: 0,
                        explanation: '正确！re模块提供了正则表达式的功能。'
                    }
                ],
                'level8': [
                    {
                        id: 'python_electronic_2023_8_1',
                        type: 'single',
                        question: '在Python中，以下哪个是异步函数的正确定义？',
                        options: [
                            'async def my_function():',
                            'def async my_function():',
                            'async function my_function() {',
                            'function async my_function() {'
                        ],
                        answer: 0,
                        explanation: '正确！Python使用async def定义异步函数。'
                    },
                    {
                        id: 'python_electronic_2023_8_2',
                        type: 'single',
                        question: 'Python中，以下哪个关键字用于等待异步操作完成？',
                        options: [
                            'await',
                            'wait',
                            'async',
                            'yield'
                        ],
                        answer: 0,
                        explanation: '正确！await关键字用于等待异步函数执行完成。'
                    },
                    {
                        id: 'python_electronic_2023_8_3',
                        type: 'single',
                        question: '以下哪个模块用于网络编程？',
                        options: [
                            'socket',
                            'network',
                            'http',
                            'tcp'
                        ],
                        answer: 0,
                        explanation: '正确！socket模块提供了网络编程的基础功能。'
                    }
                ]
            },
            '2022': {
                'level1': [
                    {
                        id: 'python_electronic_2022_1_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的多行注释？',
                        options: [
                            '"""这是多行注释"""',
                            '/*这是多行注释*/',
                            '<!--这是多行注释-->',
                            '#这是多行注释'
                        ],
                        answer: 0,
                        explanation: '正确！Python使用三引号"""创建多行字符串，也可用作多行注释。'
                    },
                    {
                        id: 'python_electronic_2022_1_2',
                        type: 'single',
                        question: 'Python中，以下哪个是正确的比较运算符？',
                        options: [
                            '==',
                            '===',
                            '=:',
                            ':=',
                        ],
                        answer: 0,
                        explanation: '正确！Python使用==进行相等比较。'
                    },
                    {
                        id: 'python_electronic_2022_1_3',
                        type: 'single',
                        question: '以下哪个不是Python的数值类型？',
                        options: [
                            'complex',
                            'int',
                            'float',
                            'decimal'
                        ],
                        answer: 3,
                        explanation: '正确！decimal不是Python的内置数值类型，需要导入decimal模块。'
                    }
                ],
                'level2': [
                    {
                        id: 'python_electronic_2022_2_1',
                        type: 'single',
                        question: '在Python中，以下哪个运算符用于幂运算？',
                        options: [
                            '**',
                            '^',
                            'pow',
                            '*'
                        ],
                        answer: 0,
                        explanation: '正确！**是Python的幂运算符，如2**3表示2的3次方。'
                    },
                    {
                        id: 'python_electronic_2022_2_2',
                        type: 'single',
                        question: 'Python中，以下哪个是正确的字符串索引方式？',
                        options: [
                            's[0]',
                            's(0)',
                            's{0}',
                            's<0>'
                        ],
                        answer: 0,
                        explanation: '正确！Python使用方括号[]进行字符串索引，索引从0开始。'
                    },
                    {
                        id: 'python_electronic_2022_2_3',
                        type: 'single',
                        question: '以下哪个函数可以将字符串转换为浮点数？',
                        options: [
                            'float()',
                            'int()',
                            'str()',
                            'double()'
                        ],
                        answer: 0,
                        explanation: '正确！float()函数可以将字符串或整数转换为浮点数。'
                    }
                ],
                'level3': [
                    {
                        id: 'python_electronic_2022_3_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的while循环？',
                        options: [
                            'while x > 0:',
                            'while (x > 0) {',
                            'while x > 0 do',
                            'while x > 0:'
                        ],
                        answer: 0,
                        explanation: '正确！Python的while循环使用冒号结尾，不需要括号。'
                    },
                    {
                        id: 'python_electronic_2022_3_2',
                        type: 'single',
                        question: 'Python中，以下哪个关键字用于继续循环的下一次迭代？',
                        options: [
                            'continue',
                            'break',
                            'pass',
                            'next'
                        ],
                        answer: 0,
                        explanation: '正确！continue关键字用于跳过当前循环的剩余部分，直接进入下一次迭代。'
                    },
                    {
                        id: 'python_electronic_2022_3_3',
                        type: 'single',
                        question: '以下哪个是Python中的空语句？',
                        options: [
                            'pass',
                            'null',
                            'empty',
                            'void'
                        ],
                        answer: 0,
                        explanation: '正确！pass是Python中的空语句，不执行任何操作。'
                    }
                ],
                'level4': [
                    {
                        id: 'python_electronic_2022_4_1',
                        type: 'single',
                        question: '在Python中，以下哪个方法可以反转列表？',
                        options: [
                            'reverse()',
                            'sort()',
                            'sorted()',
                            'reversed()'
                        ],
                        answer: 0,
                        explanation: '正确！reverse()方法用于原地反转列表。'
                    },
                    {
                        id: 'python_electronic_2022_4_2',
                        type: 'single',
                        question: 'Python中，以下哪个是正确的列表切片方式？',
                        options: [
                            'list[1:3]',
                            'list(1:3)',
                            'list{1:3}',
                            'list<1:3>'
                        ],
                        answer: 0,
                        explanation: '正确！Python使用方括号和冒号进行列表切片。'
                    },
                    {
                        id: 'python_electronic_2022_4_3',
                        type: 'single',
                        question: '以下哪个函数可以获取字典中所有的键？',
                        options: [
                            'keys()',
                            'values()',
                            'items()',
                            'get()'
                        ],
                        answer: 0,
                        explanation: '正确！keys()方法返回字典中所有键的视图。'
                    }
                ],
                'level5': [
                    {
                        id: 'python_electronic_2022_5_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的函数返回语句？',
                        options: [
                            'return x',
                            'return x;',
                            'return(x)',
                            '以上都是'
                        ],
                        answer: 3,
                        explanation: '正确！Python的return语句可以有多种写法，有无括号和分号都是允许的。'
                    },
                    {
                        id: 'python_electronic_2022_5_2',
                        type: 'single',
                        question: 'Python中，以下哪个模块用于随机数生成？',
                        options: [
                            'random',
                            'math',
                            'numbers',
                            'statistics'
                        ],
                        answer: 0,
                        explanation: '正确！random模块提供了生成随机数的函数。'
                    },
                    {
                        id: 'python_electronic_2022_5_3',
                        type: 'single',
                        question: '以下哪个是Python中的集合推导式？',
                        options: [
                            '{x for x in range(10)}',
                            '[x for x in range(10)]',
                            '(x for x in range(10))',
                            'set(x for x in range(10))'
                        ],
                        answer: 0,
                        explanation: '正确！集合推导式使用花括号{}，类似于列表推导式。'
                    }
                ],
                'level6': [
                    {
                        id: 'python_electronic_2022_6_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的异常抛出语句？',
                        options: [
                            'raise Exception("错误信息")',
                            'throw Exception("错误信息")',
                            'error Exception("错误信息")',
                            'exception Exception("错误信息")'
                        ],
                        answer: 0,
                        explanation: '正确！Python使用raise关键字抛出异常。'
                    },
                    {
                        id: 'python_electronic_2022_6_2',
                        type: 'single',
                        question: 'Python中，以下哪个方法用于获取对象的字符串表示？',
                        options: [
                            '__str__',
                            '__repr__',
                            '__unicode__',
                            '__string__'
                        ],
                        answer: 0,
                        explanation: '正确！__str__方法定义了对象的字符串表示，用于str()函数和print()函数。'
                    },
                    {
                        id: 'python_electronic_2022_6_3',
                        type: 'single',
                        question: '以下哪个是正确的文件写入方式？',
                        options: [
                            'open("file.txt", "w")',
                            'open("file.txt", "r+")',
                            'open("file.txt", "a")',
                            '以上都是'
                        ],
                        answer: 3,
                        explanation: '正确！Python提供多种文件打开模式，"w"、"r+"和"a"都可以用于写入文件。'
                    }
                ],
                'level7': [
                    {
                        id: 'python_electronic_2022_7_1',
                        type: 'single',
                        question: '在Python中，以下哪个函数用于将列表映射为新列表？',
                        options: [
                            'map()',
                            'filter()',
                            'reduce()',
                            'transform()'
                        ],
                        answer: 0,
                        explanation: '正确！map()函数将函数应用于列表中的每个元素，返回结果列表。'
                    },
                    {
                        id: 'python_electronic_2022_7_2',
                        type: 'single',
                        question: 'Python中，以下哪个装饰器用于定义静态方法？',
                        options: [
                            '@staticmethod',
                            '@classmethod',
                            '@property',
                            '@static'
                        ],
                        answer: 0,
                        explanation: '正确！@staticmethod装饰器用于定义静态方法，不需要访问实例或类。'
                    },
                    {
                        id: 'python_electronic_2022_7_3',
                        type: 'single',
                        question: '以下哪个模块用于处理日期和时间？',
                        options: [
                            'datetime',
                            'time',
                            'date',
                            'calendar'
                        ],
                        answer: 0,
                        explanation: '正确！datetime模块提供了处理日期和时间的类和函数。'
                    }
                ],
                'level8': [
                    {
                        id: 'python_electronic_2022_8_1',
                        type: 'single',
                        question: '在Python中，以下哪个是正确的上下文管理器协议方法？',
                        options: [
                            '__enter__和__exit__',
                            'open和close',
                            'start和stop',
                            'begin和end'
                        ],
                        answer: 0,
                        explanation: '正确！实现了__enter__和__exit__方法的对象可以作为上下文管理器使用。'
                    },
                    {
                        id: 'python_electronic_2022_8_2',
                        type: 'single',
                        question: 'Python中，以下哪个函数用于动态导入模块？',
                        options: [
                            'importlib.import_module()',
                            'dynamic_import()',
                            'load_module()',
                            'require()'
                        ],
                        answer: 0,
                        explanation: '正确！importlib模块的import_module()函数用于动态导入模块。'
                    },
                    {
                        id: 'python_electronic_2022_8_3',
                        type: 'single',
                        question: '以下哪个模块用于进程间通信？',
                        options: [
                            'multiprocessing',
                            'threading',
                            'concurrent',
                            'asyncio'
                        ],
                        answer: 0,
                        explanation: '正确！multiprocessing模块提供了进程间通信的功能。'
                    }
                ]
            }
        }
    },
    cpp: {
        'gesp': {
            '2024': {
                'level1': [
                    {
                        id: 'cpp_gesp_2024_1_1',
                        type: 'single',
                        question: '在C++中，以下哪个是正确的头文件包含语句？',
                        options: [
                            '#include <iostream>',
                            'include <iostream>',
                            '#import <iostream>',
                            'using namespace std;'
                        ],
                        answer: 0,
                        explanation: '正确！C++使用#include指令包含头文件。'
                    },
                    {
                        id: 'cpp_gesp_2024_1_2',
                        type: 'single',
                        question: 'C++中，以下哪个是正确的主函数定义？',
                        options: [
                            'int main()',
                            'void main()',
                            'main()',
                            'function main()'
                        ],
                        answer: 0,
                        explanation: '正确！C++的主函数应该返回int类型。'
                    },
                    {
                        id: 'cpp_gesp_2024_1_3',
                        type: 'single',
                        question: '以下哪个不是C++的基本数据类型？',
                        options: [
                            'string',
                            'int',
                            'float',
                            'char'
                        ],
                        answer: 0,
                        explanation: '正确！string不是C++的基本数据类型，而是标准库中的类。'
                    }
                ],
                'level2': [
                    {
                        id: 'cpp_gesp_2024_2_1',
                        type: 'single',
                        question: '在C++中，以下哪个是正确的变量声明？',
                        options: [
                            'int x;',
                            'x int;',
                            'variable int x;',
                            'int var x;'
                        ],
                        answer: 0,
                        explanation: '正确！C++的变量声明格式为：类型名 变量名;'
                    },
                    {
                        id: 'cpp_gesp_2024_2_2',
                        type: 'single',
                        question: 'C++中，以下哪个是正确的输出语句？',
                        options: [
                            'cout << "Hello World";',
                            'print("Hello World");',
                            'console.log("Hello World");',
                            'printf("Hello World");'
                        ],
                        answer: 0,
                        explanation: '正确！C++使用cout进行标准输出。'
                    },
                    {
                        id: 'cpp_gesp_2024_2_3',
                        type: 'single',
                        question: '以下哪个运算符用于赋值？',
                        options: [
                            '=',
                            '==',
                            ':=',
                            '=>'
                        ],
                        answer: 0,
                        explanation: '正确！C++使用=运算符进行赋值。'
                    }
                ],
                'level3': [
                    {
                        id: 'cpp_gesp_2024_3_1',
                        type: 'single',
                        question: '在C++中，以下哪个是正确的条件判断语句？',
                        options: [
                            'if (x > 5)',
                            'if x > 5:',
                            'if {x > 5}',
                            'if x > 5 then'
                        ],
                        answer: 0,
                        explanation: '正确！C++的if语句条件需要用括号包围。'
                    },
                    {
                        id: 'cpp_gesp_2024_3_2',
                        type: 'single',
                        question: 'C++中，以下哪个是正确的for循环？',
                        options: [
                            'for (int i = 0; i < 5; i++)',
                            'for i in 0..4',
                            'for (i = 0; i < 5)',
                            'for i = 0 to 4'
                        ],
                        answer: 0,
                        explanation: '正确！C++的for循环包含初始化、条件和递增三个部分。'
                    },
                    {
                        id: 'cpp_gesp_2024_3_3',
                        type: 'single',
                        question: '以下哪个是C++中的数组声明？',
                        options: [
                            'int arr[5];',
                            'array<int> arr(5);',
                            'int[] arr = new int[5];',
                            'vector<int> arr(5);'
                        ],
                        answer: 0,
                        explanation: '正确！C++中使用方括号声明数组大小。'
                    }
                ],
                'level4': [
                    {
                        id: 'cpp_gesp_2024_4_1',
                        type: 'single',
                        question: '在C++中，以下哪个是正确的函数声明？',
                        options: [
                            'int add(int a, int b);',
                            'function add(int a, int b)',
                            'int function add(a, b)',
                            'add(int a, int b): int'
                        ],
                        answer: 0,
                        explanation: '正确！C++的函数声明包括返回类型、函数名和参数列表。'
                    },
                    {
                        id: 'cpp_gesp_2024_4_2',
                        type: 'single',
                        question: 'C++中，以下哪个是正确的指针声明？',
                        options: [
                            'int* p;',
                            'pointer int p;',
                            'int &p;',
                            'int p*;'
                        ],
                        answer: 0,
                        explanation: '正确！C++中指针声明使用*符号。'
                    },
                    {
                        id: 'cpp_gesp_2024_4_3',
                        type: 'single',
                        question: '以下哪个是C++中的引用声明？',
                        options: [
                            'int& ref = x;',
                            'int ref = &x;',
                            'reference int ref = x;',
                            'int *ref = &x;'
                        ],
                        answer: 0,
                        explanation: '正确！C++中引用声明使用&符号。'
                    }
                ],
                'level5': [
                    {
                        id: 'cpp_gesp_2024_5_1',
                        type: 'single',
                        question: '在C++中，以下哪个是正确的类定义？',
                        options: [
                            'class MyClass {};',
                            'struct MyClass {};',
                            'object MyClass {};',
                            'type MyClass {};'
                        ],
                        answer: 0,
                        explanation: '正确！C++使用class关键字定义类。'
                    },
                    {
                        id: 'cpp_gesp_2024_5_2',
                        type: 'single',
                        question: 'C++中，以下哪个是正确的构造函数？',
                        options: [
                            'MyClass() {}',
                            'void MyClass() {}',
                            'constructor MyClass() {}',
                            'MyClass(void) {}'
                        ],
                        answer: 0,
                        explanation: '正确！构造函数与类名相同，没有返回类型。'
                    },
                    {
                        id: 'cpp_gesp_2024_5_3',
                        type: 'single',
                        question: '以下哪个是C++中的命名空间使用语句？',
                        options: [
                            'using namespace std;',
                            'import std;',
                            'include std;',
                            'using std;'
                        ],
                        answer: 0,
                        explanation: '正确！C++使用using namespace语句引入命名空间。'
                    }
                ],
                'level6': [
                    {
                        id: 'cpp_gesp_2024_6_1',
                        type: 'single',
                        question: '在C++中，以下哪个是正确的继承语法？',
                        options: [
                            'class Child : public Parent {};',
                            'class Child extends Parent {};',
                            'class Child inherits Parent {};',
                            'class Child -> Parent {};'
                        ],
                        answer: 0,
                        explanation: '正确！C++使用冒号和访问修饰符指定继承关系。'
                    },
                    {
                        id: 'cpp_gesp_2024_6_2',
                        type: 'single',
                        question: 'C++中，以下哪个是正确的虚函数声明？',
                        options: [
                            'virtual void func();',
                            'void virtual func();',
                            'dynamic void func();',
                            'override void func();'
                        ],
                        answer: 0,
                        explanation: '正确！C++使用virtual关键字声明虚函数。'
                    },
                    {
                        id: 'cpp_gesp_2024_6_3',
                        type: 'single',
                        question: '以下哪个是C++中的异常抛出语句？',
                        options: [
                            'throw exception;',
                            'raise exception;',
                            'error exception;',
                            'exception throw;'
                        ],
                        answer: 0,
                        explanation: '正确！C++使用throw关键字抛出异常。'
                    }
                ],
                'level7': [
                    {
                        id: 'cpp_gesp_2024_7_1',
                        type: 'single',
                        question: '在C++中，以下哪个是正确的模板声明？',
                        options: [
                            'template <typename T>',
                            'template T',
                            'generic <T>',
                            'type <T>'
                        ],
                        answer: 0,
                        explanation: '正确！C++使用template关键字和typename或class声明模板。'
                    },
                    {
                        id: 'cpp_gesp_2024_7_2',
                        type: 'single',
                        question: 'C++中，以下哪个是正确的智能指针？',
                        options: [
                            'std::unique_ptr<int> p;',
                            'auto_ptr<int> p;',
                            'smart_ptr<int> p;',
                            'ptr<int> p;'
                        ],
                        answer: 0,
                        explanation: '正确！unique_ptr是C++11引入的智能指针。'
                    },
                    {
                        id: 'cpp_gesp_2024_7_3',
                        type: 'single',
                        question: '以下哪个是C++中的lambda表达式？',
                        options: [
                            '[](int x) { return x * 2; }',
                            'lambda(int x) { return x * 2; }',
                            'function(int x) { return x * 2; }',
                            'auto f = (int x) => x * 2;'
                        ],
                        answer: 0,
                        explanation: '正确！C++的lambda表达式使用[]开始，后跟参数和函数体。'
                    }
                ],
                'level8': [
                    {
                        id: 'cpp_gesp_2024_8_1',
                        type: 'single',
                        question: '在C++中，以下哪个是正确的移动构造函数？',
                        options: [
                            'MyClass(MyClass&& other) noexcept {}',
                            'MyClass(MyClass& other) {}',
                            'MyClass(MyClass* other) {}',
                            'MyClass(move MyClass other) {}'
                        ],
                        answer: 0,
                        explanation: '正确！移动构造函数接受右值引用参数。'
                    },
                    {
                        id: 'cpp_gesp_2024_8_2',
                        type: 'single',
                        question: 'C++中，以下哪个是正确的constexpr函数？',
                        options: [
                            'constexpr int add(int a, int b) { return a + b; }',
                            'const int add(int a, int b) { return a + b; }',
                            'int constexpr add(int a, int b) { return a + b; }',
                            'static const int add(int a, int b) { return a + b; }'
                        ],
                        answer: 0,
                        explanation: '正确！constexpr关键字用于声明可以在编译时计算的函数。'
                    },
                    {
                        id: 'cpp_gesp_2024_8_3',
                        type: 'single',
                        question: '以下哪个是C++中的右值引用？',
                        options: [
                            'int&& rvalue_ref = 5;',
                            'int& rvalue_ref = 5;',
                            'int* rvalue_ref = &5;',
                            'int&& rvalue_ref = &5;'
                        ],
                        answer: 0,
                        explanation: '正确！右值引用使用&&符号。'
                    }
                ]
            }
        }
    }
};
