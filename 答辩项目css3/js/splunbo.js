 $(function () {
        new Carousel();
    })

    function Carousel() {
        this.$Lis = $('.imgList li');
        this.$imagesLis = $('.imgList img');
        this.$btnLis = $('.common-scroller-controls li');

        this.nowIdx = 0; //当前显示的li的索引值
        this.lock = true; //判断li是否正在执行动画

        this.bindEvent();
    }
    Carousel.prototype.bindEvent = function () {
        var _this = this;
        $('.rightBtn').click(function () {
            _this.nowIdx = _this.nowIdx + 1;
            if (_this.nowIdx > _this.$imagesLis.length - 1) {
                _this.nowIdx = 0;
            }
            _this.tabs();
        })
        $('.leftBtn').click(function () {
            _this.nowIdx = _this.nowIdx - 1;
            if (_this.nowIdx < 0) {
                _this.nowIdx = _this.$imagesLis.length - 1;
            }
            _this.tabs();
        })
        this.$btnLis.click(function () {
            if( _this.nowIdx != $(this).index()&&_this.lock ){//判断当前选中的li是否是自己.不是自己在进行爆炸
                _this.nowIdx = $(this).index();
                _this.tabs();
            }           
        })
    }
    Carousel.prototype.tabs = function () {
        var _this = this;
        if( !this.lock ) return;//如果this.lock不是true说明动画还没执行完呢 不要执行以下操作

        //生成maoni中的元素, 横向4个 纵向5个 5行8列
        for (var row = 0; row < 4; row++) {
            for (var col = 0; col < 4; col++) {
                $('<div></div>').css({
                    'width': 300,//横向一共4个块 总宽度560 求每一个块的宽
                    'height': 100,//纵向一共4行 总高度400 求每一个块的高
                    'left': col * 300,//一行8个块 总宽度560 求每一个块的left值
                    'top': row * 100,//纵向一共5个块 总高度400 求每一个块的top值
                    'background-image': 'url(' + this.$imagesLis.eq(this.nowIdx).attr('src') + ')',
                    'background-position': (-col * 300) + 'px ' + (-row * 100) + 'px'
                }).appendTo($('.maoni'));

            }
        }
        //控制div爆炸运动(添加setTimeout是为了解决transition第一次有延迟的现象)
        setTimeout(function (){
            $('.maoni').find('div').each(function () {
                $(this).css({
                    'transform': 'rotateZ(' + (Math.random() * 180) + 'deg) translateZ(900px)',
                    'opacity':0
                })
            })
        },1);
        

        //切换按钮和li的样式
        this.$Lis.eq(this.nowIdx).addClass('active').siblings().removeClass('active');
        this.$btnLis.eq(this.nowIdx).addClass('active').siblings().removeClass('active');

        this.lock = false;
        setTimeout(function (){
            $('.maoni').html('');
            _this.lock = true;//动画执行完了,DOM清空了,允许下一次点击切换
        },800)
    }