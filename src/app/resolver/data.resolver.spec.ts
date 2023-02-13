import { RouterTestingModule } from '@angular/router/testing';
import { PackageOptions } from '../class/package-options';
import { DataResolver } from './data.resolver';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
interface TreeNode<T> {
  value: T;
  children: TreeNode<T>[];
}

class TestTreeNode implements TreeNode<ActivatedRouteSnapshot> {
  value: ActivatedRouteSnapshot;
  children: TestTreeNode[];

  constructor(route: ActivatedRouteSnapshot, children: TestTreeNode[]) {
    this.value = route;
    this.children = children;
  }
}

describe('DataResolver', () => {
  let resolver: DataResolver;
  let packageOptions: PackageOptions;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    packageOptions = TestBed.inject(PackageOptions);
    resolver = new DataResolver(packageOptions);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should divide the data into two arrays of equal length', () => {
    const data = [1, 2, 3, 4, 5];
    packageOptions.createDb = jasmine.createSpy().and.returnValue({ packageOptions: data });

    const route = new ActivatedRouteSnapshot();
    const state = new RouterStateSnapshot(new TestTreeNode(route, []));
    const result = resolver.resolve(route, state);

    expect(result.array1.length).toEqual(2);
    expect(result.array2.length).toEqual(3);

  });
});

