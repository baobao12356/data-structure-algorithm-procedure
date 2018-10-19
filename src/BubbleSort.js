/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-19 09:01:54  
 * @Desc:   冒泡排序 
 */


/** 
冒泡排序：

比较两个相邻的元素，将值大的元素交换至右端。


举例说明：要排序数组：let arr= [6,3,8,2,9,1]   

第一趟排序(次数 6 - 1 = 5)：

第一次排序：6和3比较，6大于3，交换位置：  3  6  8  2  9  1

第二次排序：6和8比较，6小于8，不交换位置：3  6  8  2  9  1

第三次排序：8和2比较，8大于2，交换位置：  3  6  2  8  9  1

第四次排序：8和9比较，8小于9，不交换位置：3  6  2  8  9  1

第五次排序：9和1比较：9大于1，交换位置：  3  6  2  8  1  9

第一趟总共进行了5次比较， 排序结果：      3  6  2  8  1  9(最大)

---------------------------------------------------------------------

第二趟排序(次数 6 - 2 = 4)：

第一次排序：3和6比较，3小于6，不交换位置：3  6  2  8  1  9

第二次排序：6和2比较，6大于2，交换位置：  3  2  6  8  1  9

第三次排序：6和8比较，6大于8，不交换位置：3  2  6  8  1  9

第四次排序：8和1比较，8大于1，交换位置：  3  2  6  1  8  9

第二趟总共进行了4次比较， 排序结果：      3  2  6  1  8(第二大)  9

---------------------------------------------------------------------

第三趟排序(次数 6 - 3 = 3)：

第一次排序：3和2比较，3大于2，交换位置：  2  3  6  1  8  9

第二次排序：3和6比较，3小于6，不交换位置：2  3  6  1  8  9

第三次排序：6和1比较，6大于1，交换位置：  2  3  1  6  8  9

第二趟总共进行了3次比较， 排序结果：         2  3  1  6(第三大)  8  9

---------------------------------------------------------------------

第四趟排序(次数 6 - 4 = 2)：

第一次排序：2和3比较，2小于3，不交换位置：2  3  1  6  8  9

第二次排序：3和1比较，3大于1，交换位置：  2  1  3  6  8  9

第二趟总共进行了2次比较， 排序结果：        2  1  3(第四大)  6  8  9

---------------------------------------------------------------------

第五趟排序(次数 6 - 5 = 1)：

第一次排序：2和1比较，2大于1，交换位置：  1  2  3  6  8  9

第二趟总共进行了1次比较， 排序结果：  1  2  3  6  8  9

---------------------------------------------------------------------

最终结果：1  2(第五大)  3  6  8  9

---------------------------------------------------------------------


N(以上是6)个数字要排序完成，总共要进行N-1(6-1=5)趟排序，第I趟排序的次数为N-I次。

以以上排序为例，进行完第1趟排序，最后一个数字肯定是最大的数字

进行完第2趟排序，最后第二个数字肯定是第二大的数字。

进行完第3趟排序...

直至最后数字都从小到大排序。


用时间复杂度来说：

　　1.如果我们的数据正序，只需要走一趟即可完成排序。所需的比较次数C和记录移动次数M均达到最小值，即：Cmin=n-1;Mmin=0;所以，冒泡排序最好的时间复杂度为O(n)。

　　2.如果很不幸我们的数据是反序的，则需要进行n-1趟排序。每趟排序要进行n-i次比较(1≤i≤n-1)，且每次比较都必须移动记录三次来达到交换记录位置。在这种情况下，比较和移动次数均达到最大值：冒泡排序的最坏时间复杂度为：O(n2) 。

综上所述：冒泡排序总的平均时间复杂度为：O(n2) 。
https://www.cnblogs.com/shen-hua/p/5422676.html
*/
