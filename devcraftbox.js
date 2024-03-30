// 创建一个名为 DevCraftBox 的类
class DevCraftBox {
    constructor() {
        this.tools = [];
    }

    // 添加工具到工具箱
    addTool(tool) {
        this.tools.push(tool);
    }

    // 从工具箱中移除指定工具
    removeTool(tool) {
        const index = this.tools.indexOf(tool);
        if (index !== -1) {
            this.tools.splice(index, 1);
        }
    }

    // 显示工具箱中所有工具
    displayTools() {
        console.log("工具箱中的工具:");
        this.tools.forEach(tool => {
            console.log(tool);
        });
    }
}

// 创建一个新的 DevCraftBox 实例
const myDevCraftBox = new DevCraftBox();

// 向工具箱中添加一些工具
myDevCraftBox.addTool("文本编辑器");
myDevCraftBox.addTool("命令行工具");
myDevCraftBox.addTool("版本控制系统");

// 显示工具箱中的工具
myDevCraftBox.displayTools();

// 从工具箱中移除一个工具
myDevCraftBox.removeTool("文本编辑器");

// 再次显示工具箱中的工具
myDevCraftBox.displayTools();
