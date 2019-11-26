/**
 * 导入element-ui组件
 */
import Vue from 'vue'
import{
    Tabs,
    TabPane,
    Container,
    Aside,
    Header,
    Main,
    Footer,
    Collapse,
    CollapseItem,
    Tree,
    Row,
    Col,
    Popover,
    Table,
    Button,
    TableColumn,
    Select,
    Option,
    Form,
    FormItem,
    Input,
    Menu,
    MenuItem,
    Pagination,
    Tag,
    MessageBox,
    Message,
    Upload,
    Dialog
} from 'element-ui'
// import VueAMap from "vue-amap";

// Vue.use(MessageBox);
// Vue.use(Message);
Vue.use(Upload);
Vue.use(Dialog);
Vue.use(Tag);
Vue.use(Pagination);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Select);
Vue.use(Option);
Vue.use(Popover);
Vue.use(Table);
Vue.use(Button);
Vue.use(TableColumn);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Tree);
Vue.use(Col);
Vue.use(Row);

Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;