/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    //保证nums1比nums2短
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    var N1 = nums1.length;
    var N2 = nums2.length;

    var cut1 = 0;
    var cut2 = 0;
    var cutL = 0;
    var cutR = N1;
    while(cut1 <= N1) {
        cut1 = parseInt(((cutR - cutL) >> 1)) + cutL;
        cut2 = parseInt(((N1 + N2) >> 1) - cut1);

        let L1 = (cut1 == 0) ? Number.MIN_VALUE : nums1[cut1 - 1];
        let L2 = (cut2 == 0) ? Number.MIN_VALUE : nums2[cut2 - 1];
        let R1 = (cut1 == N1) ? Number.MAX_VALUE : nums1[cut1];
        let R2 = (cut2 == N2) ? Number.MAX_VALUE : nums2[cut2];

        if(L1 > R2) {
            cutR = cut1 - 1;
        }else if(L2 > R1) {
            cutL = cut1 + 1;
        }else {
            console.log(1);
            if((N1+N2)%2 == 0) {
                return (Math.max(L1,L2) + Math.min(R1,R2)) / 2.0;
            } else {
                return Math.min(R1,R2)
            }
        }
    }
    return -1;
};