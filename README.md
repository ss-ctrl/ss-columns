# ss-columns

## Project setup
```
npm install ss-columns -D
```



## Use

### In app entry file:

```js
import Vue from 'vue';
import Plugin from 'ss-columns';
Vue.use(Plugin);
```

### In your component:

```js
<el-table v-ss-columns>
  <el-table-column label="No." type="index" class-name="dont-fix"></el-table-column>
  <el-table-column label="Name" prop="name"></el-table-column>
  <el-table-column label="Age" prop="age"></el-table-column>
</el-table>
```



### For columns that don't need to be fitted, add a `dont-fix` class by setting `class-name` in `<el-table-column>`.
