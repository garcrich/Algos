export default function findBuildings(heights: number[]): number[] {
    let buildingsWithView: number[] = [];
    let tallestSeen = 0;

    for(let i = heights.length - 1; i >= 0; i--) {

        if(heights[i] > tallestSeen) {
            buildingsWithView.push(i);
            tallestSeen = heights[i]
        }
    }

    let left = 0;
    let right = buildingsWithView.length - 1;

    while(left < right) {
        [buildingsWithView[left], buildingsWithView[right]] = [buildingsWithView[right], buildingsWithView[left]] 
        left++
        right--
    }

    return buildingsWithView
};